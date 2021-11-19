// theirs
import { ethers } from "hardhat";
import async from "async";
// utils
import setup from "../__fixtures__";
import { shouldBehaveLikeCore } from "../Core.behavior";
import { generateRandomDerivativeSetup } from "../../utils/testCaseGenerator";
// types and constants
import { TNamedSigners } from "../../types";

describe("Randomized test cases", () => {
  let namedSigners: TNamedSigners;

  before(async () => {
    namedSigners = (await ethers.getNamedSigners()) as TNamedSigners;
  });
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  async.forEach(new Array(10).fill(1), async () => {
    it("Test randomly generated synthetic", async () => {
      const { core, testToken, optionCallMock, tokenSpender, opiumProxyFactory, registry, oracleIdMock } =
        await setup();

      const derivativeOrder = await generateRandomDerivativeSetup(
        oracleIdMock.address,
        testToken.address,
        optionCallMock.address,
      );
      console.log("derivativeOrder ", derivativeOrder);

      const oracleCallback = async () => {
        await oracleIdMock.triggerCallback(derivativeOrder.derivative.endTime, derivativeOrder.price);
      };

      await shouldBehaveLikeCore(
        core,
        registry,
        testToken,
        tokenSpender,
        opiumProxyFactory,
        optionCallMock,
        oracleCallback,
        namedSigners.seller,
        namedSigners.buyer,
        derivativeOrder,
      );
    });
  });
});
