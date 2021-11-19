pragma solidity 0.8.5;
import "../libs/LibDerivative.sol";

interface IOpiumProxyFactory {
    function getImplementationAddress() external view returns (address);

    function create(
        address _buyer,
        address _seller,
        uint256 _amount,
        bytes32 _derivativeHash,
        LibDerivative.Derivative calldata _derivative,
        string calldata _derivativeAuthorCustomName
    ) external;

    function mintPair(
        address _buyer,
        address _seller,
        address _longPositionAddress,
        address _shortPositionAddress,
        uint256 _amount
    ) external;

    function burnPair(
        address _tokenOwner,
        address _longToken,
        address _shortToken,
        uint256 _amount
    ) external;

    function burn(
        address _tokenOwner,
        address _token,
        uint256 _amount
    ) external;
}
