pragma solidity 0.8.5;
import "../libs/LibDerivative.sol";
import "../libs/LibCalculator.sol";

contract EchidnaMockSyntheticId {
    using LibDerivative for LibDerivative.Derivative;
    using LibCalculator for uint256;

    LibDerivative.Derivative internal derivative;

    function setup(LibDerivative.Derivative memory _derivative) public {
        derivative = _derivative;
    }

    function getMargin() public view returns (uint256 buyerMargin, uint256 sellerMargin) {
        buyerMargin = 0;
        sellerMargin = derivative.margin;
    }

    function getExecutionPayout(uint256 _result) public view returns (uint256 buyerPayout, uint256 sellerPayout) {
        uint256 ppt;
        uint256 strikePrice = derivative.params[0];

        if (derivative.params.length == 2) {
            ppt = derivative.params[1];
        } else {
            ppt = 1 ether;
        }

        if (_result > strikePrice) {
            uint256 profit = _result - strikePrice;
            profit = (profit * ppt) / ppt;

            if (profit < derivative.margin) {
                buyerPayout = profit;
                sellerPayout = derivative.margin - profit;
            } else {
                buyerPayout = derivative.margin;
                sellerPayout = 0;
            }
        } else {
            buyerPayout = 0;
            sellerPayout = derivative.margin;
        }
    }
}

contract EchidnaCorePayout {
    using LibDerivative for LibDerivative.Derivative;
    using LibCalculator for uint256;
    EchidnaMockSyntheticId internal echidnaMockSyntheticId;
    uint256 buyerPayout;
    uint256 sellerPayout;
    uint256 buyerTotalMargin;
    uint256 sellerTotalMargin;

    constructor() {
        echidnaMockSyntheticId = new EchidnaMockSyntheticId();
    }

    function getPayout(
        LibDerivative.Derivative memory _derivative,
        uint256 _amount,
        uint256 _oracleData
    ) public {
        echidnaMockSyntheticId.setup(_derivative);
        (uint256 buyerMargin, uint256 sellerMargin) = echidnaMockSyntheticId.getMargin();
        uint256 totalMargin = buyerMargin + sellerMargin;
        require((totalMargin * _amount).modWithPrecisionFactor() == 0);
        (uint256 buyerPayoutRatio, uint256 sellerPayoutRatio) = echidnaMockSyntheticId.getExecutionPayout(_oracleData);

        buyerPayout = (((buyerMargin + sellerMargin) * buyerPayoutRatio) / (buyerPayoutRatio + sellerPayoutRatio))
            .mulWithPrecisionFactor(_amount);
        sellerPayout = (((buyerMargin + sellerMargin) * sellerPayoutRatio) / (buyerPayoutRatio + sellerPayoutRatio))
            .mulWithPrecisionFactor(_amount);
        buyerTotalMargin = buyerMargin.mulWithPrecisionFactor(_amount);
        sellerTotalMargin = sellerMargin.mulWithPrecisionFactor(_amount);
    }

    function echidna_testPayout() public view returns (bool) {
        bool isEqualToTotalMargin = buyerPayout + sellerPayout == buyerTotalMargin + sellerTotalMargin;
        return isEqualToTotalMargin;
    }
}
