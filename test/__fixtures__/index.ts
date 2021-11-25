import { deployments, ethers } from "hardhat";
import {
  Core,
  MockRelayer,
  OpiumProxyFactory,
  OptionCallSyntheticIdMock,
  OracleAggregator,
  OracleIdMock,
  SyntheticAggregator,
  TestToken,
  TokenSpender,
} from "../../typechain";
import { Registry } from "../../typechain/Registry";
import { TNamedSigners } from "../../types";

export type TContracts = {
  contracts: {
    registry: Registry;
    opiumProxyFactory: OpiumProxyFactory;
    tokenSpender: TokenSpender;
    core: Core;
    testToken: TestToken;
    optionCallMock: OptionCallSyntheticIdMock;
    oracleAggregator: OracleAggregator;
    syntheticAggregator: SyntheticAggregator;
    oracleIdMock: OracleIdMock;
    testTokenSixDecimals: TestToken;
    mockRelayer: MockRelayer;
  };
  users: TNamedSigners;
};

export const getNamedSigners = async (): Promise<TNamedSigners> => {
  const namedSigners = (await ethers.getNamedSigners()) as TNamedSigners;
  return namedSigners;
};

const setup = deployments.createFixture(async (): Promise<TContracts> => {
  const users = await getNamedSigners();
  await deployments.fixture(["Protocol", "Mocks"]);

  /*******************
   * PROTOCOL
   ********************/
  const registry = <Registry>await ethers.getContract("Registry");
  const opiumProxyFactory = <OpiumProxyFactory>await ethers.getContract("OpiumProxyFactory");
  const core = <Core>await ethers.getContract("Core");
  const oracleAggregator = <OracleAggregator>await ethers.getContract("OracleAggregator");
  const syntheticAggregator = <SyntheticAggregator>await ethers.getContract("SyntheticAggregator");
  const tokenSpender = <TokenSpender>await ethers.getContract("TokenSpender");

  /*******************
   * MOCKS
   ********************/

  const optionCallMock = <OptionCallSyntheticIdMock>await ethers.getContract("OptionCallSyntheticIdMock");
  const oracleIdMock = <OracleIdMock>await ethers.getContract("OracleIdMock");

  const testToken = <TestToken>await ethers.getContract("TestToken");
  const testTokenSixDecimals = <TestToken>await ethers.getContract("SixDecimalsTestToken");
  const mockRelayer = <MockRelayer>await ethers.getContract("MockRelayer");

  return {
    contracts: {
      registry,
      opiumProxyFactory,
      tokenSpender,
      core,
      testToken,
      optionCallMock,
      oracleAggregator,
      syntheticAggregator,
      oracleIdMock,
      testTokenSixDecimals,
      mockRelayer,
    },
    users,
  };
});

export default setup;
