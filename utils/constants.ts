import { ethers } from "hardhat";

export const zeroAddress = "0x0000000000000000000000000000000000000000";
export const customDerivativeName = `Riccardo's derivative shop`;

export const AUTHOR_COMMISSION = 0.0025; // 0.25%
export const OPIUM_COMMISSION = 0.1; // 10% of author commission
export const SECONDS_10_MINS = 60 * 10;
export const SECONDS_20_MINS = 60 * 20;
export const SECONDS_30_MINS = 60 * 30;
export const SECONDS_40_MINS = 60 * 40;
export const SECONDS_50_MINS = 60 * 50;
export const SECONDS_3_WEEKS = 60 * 60 * 24 * 7 * 3;
export const SECONDS_2_WEEKS = 60 * 60 * 24 * 7 * 2;

export const executeOne = "execute(address,uint256)";
export const executeOneWithAddress = "execute(address,address,uint256)";
export const executeMany = "execute(address[],uint256[])";
export const executeManyWithAddress = "execute(address,address[],uint256[])";
export const cancelOne = "cancel(address,uint256)";
export const cancelMany = "cancel(uint8[],uint256[],(uint256,uint256,uint256[],address,address,address)[])";

export const governanceRoles = Object.freeze({
  defaultAdminRole: "0x0000000000000000000000000000000000000000000000000000000000000000",
  protocolAddressesSetterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL1")),
  executionReserveClaimerAddressSetter: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL2")),
  redemptionReserveClaimerAddressSetter: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL3")),
  executionReservePartSetterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL4")),
  noDataCancellationPeriodSetterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL5")),
  guardianRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL6")),
  whitelisterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL7")),
  executionFeeCapSetterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL8")),
  redemptionReservePartSetterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL9")),
  registryManagerRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL10")),
  coreConfigurationUpdaterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL18")),
  derivativeAuthorExecutionFeeCapSetterRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL8")),
  REDEMPTION_RESERVE_PART_SETTER_ROLE: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL9")),
  partialCreatePauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL11")),
  partialMintPauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL12")),
  partialRedeemPauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL13")),
  partialExecutionPauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL14")),
  partialCancelPauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL15")),
  partialClaimPauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL16")),
  partialGlobalUnpauserRole: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("RL17")),
});

export const semanticErrors = {
  /// CORE ERRORS
  ERROR_CORE_POSITIONS_ADDRESSES_AND_AMOUNTS_DO_NOT_MATCH: "ERROR_CORE_POSITIONS_ADDRESSES_AND_AMOUNTS_DO_NOT_MATCH",
  ERROR_CORE_EXECUTION_BEFORE_MATURITY_NOT_ALLOWED: "ERROR_CORE_EXECUTION_BEFORE_MATURITY_NOT_ALLOWED",
  ERROR_CORE_SYNTHETIC_EXECUTION_WAS_NOT_ALLOWED: "ERROR_CORE_SYNTHETIC_EXECUTION_WAS_NOT_ALLOWED",
  ERROR_CORE_NOT_ENOUGH_TOKEN_ALLOWANCE: "ERROR_CORE_NOT_ENOUGH_TOKEN_ALLOWANCE",
  ERROR_CORE_CANCELLATION_IS_NOT_ALLOWED: "ERROR_CORE_CANCELLATION_IS_NOT_ALLOWED",
  ERROR_CORE_INSUFFICIENT_P2P_BALANCE: "ERROR_CORE_INSUFFICIENT_P2P_BALANCE",
  ERROR_CORE_TICKER_WAS_CANCELLED: "ERROR_CORE_TICKER_WAS_CANCELLED",
  ERROR_ORACLE_AGGREGATOR_DATA_DOESNT_EXIST: "ERROR_ORACLE_AGGREGATOR_DATA_DOESNT_EXIST",
  ERROR_ORACLE_AGGREGATOR_DATA_ALREADY_EXIST: "ERROR_ORACLE_AGGREGATOR_DATA_ALREADY_EXIST",
  ERROR_CORE_WRONG_HASH: "WRONG_HASH",
  ERROR_CORE_WRONG_POSITION_TYPE: "WRONG_POSITION_TYPE",
  ERROR_CORE_NOT_ENOUGH_POSITIONS: "NOT_ENOUGH_POSITIONS",
  ERROR_CORE_WRONG_MOD: "WRONG_MOD",
  ERROR_CORE_CANT_CANCEL_DUMMY_ORACLE_ID: "ERROR_CORE_CANT_CANCEL_DUMMY_ORACLE_ID",
  ERROR_CORE_SYNTHETIC_VALIDATION_ERROR: "ERROR_CORE_SYNTHETIC_VALIDATION_ERROR",
  ERROR_CORE_RESERVE_AMOUNT_GREATER_THAN_BALANCE: "ERROR_CORE_RESERVE_AMOUNT_GREATER_THAN_BALANCE",
  ERROR_CORE_NO_DERIVATIVE_CREATION_IN_THE_PAST: "ERROR_CORE_NO_DERIVATIVE_CREATION_IN_THE_PAST",
  ERROR_CORE_PROTOCOL_POSITION_CREATION_PAUSED: "ERROR_CORE_PROTOCOL_POSITION_CREATION_PAUSED",
  ERROR_CORE_PROTOCOL_POSITION_MINT_PAUSED: "ERROR_CORE_PROTOCOL_POSITION_MINT_PAUSED",
  ERROR_CORE_PROTOCOL_POSITION_REDEMPTION_PAUSED: "ERROR_CORE_PROTOCOL_POSITION_REDEMPTION_PAUSED",
  ERROR_CORE_PROTOCOL_POSITION_EXECUTION_PAUSED: "ERROR_CORE_PROTOCOL_POSITION_EXECUTION_PAUSED",
  ERROR_CORE_PROTOCOL_POSITION_CANCELLATION_PAUSED: "ERROR_CORE_PROTOCOL_POSITION_CANCELLATION_PAUSED",
  ERROR_CORE_PROTOCOL_RESERVE_CLAIM_PAUSED: "ERROR_CORE_PROTOCOL_RESERVE_CLAIM_PAUSED",
  /// SYNTHETIC AGGREGATOR ERRORS
  ERROR_SYNTHETIC_AGGREGATOR_DERIVATIVE_HASH_NOT_MATCH: "ERROR_SYNTHETIC_AGGREGATOR_DERIVATIVE_HASH_NOT_MATCH",
  ERROR_SYNTHETIC_AGGREGATOR_WRONG_MARGIN: "ERROR_SYNTHETIC_AGGREGATOR_WRONG_MARGIN",
  /// REGISTRY ERRORS
  ERROR_REGISTRY_ONLY_PROTOCOL_ADDRESSES_SETTER_ROLE: "ERROR_REGISTRY_ONLY_PROTOCOL_ADDRESSES_SETTER_ROLE",
  ERROR_REGISTRY_ONLY_EXECUTION_RESERVE_CLAIMER_ADDRESS_SETTER_ROLE:
    "ERROR_REGISTRY_ONLY_EXECUTION_RESERVE_CLAIMER_ADDRESS_SETTER_ROLE",
  ERROR_REGISTRY_ONLY_REDEMPTION_RESERVE_CLAIMER_ADDRESS_SETTER_ROLE:
    "ERROR_REGISTRY_ONLY_REDEMPTION_RESERVE_CLAIMER_ADDRESS_SETTER_ROLE",
  ERROR_REGISTRY_ONLY_EXECUTION_RESERVE_PART_SETTER_ROLE: "ERROR_REGISTRY_ONLY_EXECUTION_RESERVE_PART_SETTER_ROLE",
  ERROR_REGISTRY_ONLY_NO_DATA_CANCELLATION_PERIOD_SETTER_ROLE:
    "ERROR_REGISTRY_ONLY_NO_DATA_CANCELLATION_PERIOD_SETTER_ROLE",
  ERROR_REGISTRY_ONLY_GUARDIAN_ROLE: "ERROR_REGISTRY_ONLY_GUARDIAN_ROLE",
  ERROR_REGISTRY_ONLY_WHITELISTER_ROLE: "ERROR_REGISTRY_ONLY_WHITELISTER_ROLE",
  ERROR_REGISTRY_ONLY_DERIVATIVE_AUTHOR_EXECUTION_FEE_CAP_SETTER_ROLE:
    "ERROR_REGISTRY_ONLY_DERIVATIVE_AUTHOR_EXECUTION_FEE_CAP_SETTER_ROLE",
  ERROR_REGISTRY_ONLY_REDEMPTION_RESERVE_PART_SETTER_ROLE: "ERROR_REGISTRY_ONLY_REDEMPTION_RESERVE_PART_SETTER_ROLE",
  ERROR_REGISTRY_ALREADY_PAUSED: "ERROR_REGISTRY_ALREADY_PAUSED",
  ERROR_REGISTRY_NOT_PAUSED: "ERROR_REGISTRY_NOT_PAUSED",
  ERROR_REGISTRY_NULL_ADDRESS: "ERROR_REGISTRY_NULL_ADDRESS",
  ERROR_REGISTRY_ONLY_PROTOCOL_UNPAUSER_ROLE: "ERROR_REGISTRY_ONLY_PROTOCOL_UNPAUSER_ROLE",
  /// OPIUM POSITION TOKEN ERRORS
  ERROR_OPIUM_POSITION_TOKEN_NOT_FACTORY: "ERROR_OPIUM_POSITION_TOKEN_NOT_FACTORY",
  /// OPIUM PROXY FACTORY ERRORS
  ERROR_OPIUM_PROXY_FACTORY_NOT_CORE: "ERROR_OPIUM_PROXY_FACTORY_NOT_CORE",
  ERROR_OPIUM_PROXY_CUSTOM_POSITION_TOKEN_NAME_TOO_LONG: "ERROR_OPIUM_PROXY_CUSTOM_POSITION_TOKEN_NAME_TOO_LONG",
  ERROR_CORE_NOT_OPIUM_FACTORY_POSITIONS: "ERROR_CORE_NOT_OPIUM_FACTORY_POSITIONS",
  /// TOKEN SPENDER ERRORS
  ERROR_TOKEN_SPENDER_NOT_WHITELISTED: "ERROR_TOKEN_SPENDER_NOT_WHITELISTED",
  ///
  ERROR_REGISTRY_ONLY_PARTIAL_CREATE_PAUSE_ROLE: "ERROR_REGISTRY_ONLY_PARTIAL_CREATE_PAUSE_ROLE",
  ERROR_REGISTRY_ONLY_PARTIAL_MINT_PAUSE_ROLE: "ERROR_REGISTRY_ONLY_PARTIAL_MINT_PAUSE_ROLE",
  ERROR_REGISTRY_ONLY_PARTIAL_REDEEM_PAUSE_ROLE: "ERROR_REGISTRY_ONLY_PARTIAL_REDEEM_PAUSE_ROLE",
  ERROR_REGISTRY_ONLY_PARTIAL_EXECUTE_PAUSE_ROLE: "ERROR_REGISTRY_ONLY_PARTIAL_EXECUTE_PAUSE_ROLE",
  ERROR_REGISTRY_ONLY_PARTIAL_CANCEL_PAUSE_ROLE: "ERROR_REGISTRY_ONLY_PARTIAL_CANCEL_PAUSE_ROLE",
  ERROR_REGISTRY_ONLY_PARTIAL_CLAIM_RESERVE_PAUSE_ROLE: "ERROR_REGISTRY_ONLY_PARTIAL_CLAIM_RESERVE_PAUSE_ROLE",
};

export const protocolErrors = {
  /// CORE ERRORS
  [semanticErrors.ERROR_CORE_POSITIONS_ADDRESSES_AND_AMOUNTS_DO_NOT_MATCH]: "C1",
  [semanticErrors.ERROR_CORE_WRONG_HASH]: "C2",
  [semanticErrors.ERROR_CORE_WRONG_POSITION_TYPE]: "C3",
  [semanticErrors.ERROR_CORE_NOT_ENOUGH_POSITIONS]: "C4",
  [semanticErrors.ERROR_CORE_WRONG_MOD]: "C5",
  [semanticErrors.ERROR_CORE_CANT_CANCEL_DUMMY_ORACLE_ID]: "C6",
  [semanticErrors.ERROR_CORE_TICKER_WAS_CANCELLED]: "C7",
  [semanticErrors.ERROR_CORE_SYNTHETIC_VALIDATION_ERROR]: "C8",
  [semanticErrors.ERROR_CORE_INSUFFICIENT_P2P_BALANCE]: "C9",
  [semanticErrors.ERROR_CORE_EXECUTION_BEFORE_MATURITY_NOT_ALLOWED]: "C10",
  [semanticErrors.ERROR_CORE_SYNTHETIC_EXECUTION_WAS_NOT_ALLOWED]: "C11",
  [semanticErrors.ERROR_CORE_NOT_ENOUGH_TOKEN_ALLOWANCE]: "C12",
  [semanticErrors.ERROR_CORE_CANCELLATION_IS_NOT_ALLOWED]: "C13",
  [semanticErrors.ERROR_CORE_NOT_OPIUM_FACTORY_POSITIONS]: "C14",
  [semanticErrors.ERROR_CORE_RESERVE_AMOUNT_GREATER_THAN_BALANCE]: "C15",
  [semanticErrors.ERROR_CORE_NO_DERIVATIVE_CREATION_IN_THE_PAST]: "C16",
  [semanticErrors.ERROR_CORE_PROTOCOL_POSITION_CREATION_PAUSED]: "C17",
  [semanticErrors.ERROR_CORE_PROTOCOL_POSITION_MINT_PAUSED]: "C18",
  [semanticErrors.ERROR_CORE_PROTOCOL_POSITION_REDEMPTION_PAUSED]: "C19",
  [semanticErrors.ERROR_CORE_PROTOCOL_POSITION_EXECUTION_PAUSED]: "C20",
  [semanticErrors.ERROR_CORE_PROTOCOL_POSITION_CANCELLATION_PAUSED]: "C21",
  [semanticErrors.ERROR_CORE_PROTOCOL_RESERVE_CLAIM_PAUSED]: "C22",
  /// ORACLE AGGREGATOR ERRORS
  [semanticErrors.ERROR_ORACLE_AGGREGATOR_DATA_ALREADY_EXIST]: "O1",
  [semanticErrors.ERROR_ORACLE_AGGREGATOR_DATA_DOESNT_EXIST]: "O2",
  /// SYNTHETIC AGGREGATOR ERRORS
  [semanticErrors.ERROR_SYNTHETIC_AGGREGATOR_DERIVATIVE_HASH_NOT_MATCH]: "S1",
  [semanticErrors.ERROR_SYNTHETIC_AGGREGATOR_WRONG_MARGIN]: "S2",
  /// REGISTRY ERRORS
  [semanticErrors.ERROR_REGISTRY_ONLY_PROTOCOL_ADDRESSES_SETTER_ROLE]: "R1",
  [semanticErrors.ERROR_REGISTRY_ONLY_EXECUTION_RESERVE_CLAIMER_ADDRESS_SETTER_ROLE]: "R2",
  [semanticErrors.ERROR_REGISTRY_ONLY_REDEMPTION_RESERVE_CLAIMER_ADDRESS_SETTER_ROLE]: "R3",
  [semanticErrors.ERROR_REGISTRY_ONLY_EXECUTION_RESERVE_PART_SETTER_ROLE]: "R4",
  [semanticErrors.ERROR_REGISTRY_ONLY_NO_DATA_CANCELLATION_PERIOD_SETTER_ROLE]: "R5",
  [semanticErrors.ERROR_REGISTRY_ONLY_GUARDIAN_ROLE]: "R6",
  [semanticErrors.ERROR_REGISTRY_ONLY_WHITELISTER_ROLE]: "R7",
  [semanticErrors.ERROR_REGISTRY_ONLY_DERIVATIVE_AUTHOR_EXECUTION_FEE_CAP_SETTER_ROLE]: "R8",
  [semanticErrors.ERROR_REGISTRY_ONLY_REDEMPTION_RESERVE_PART_SETTER_ROLE]: "R9",
  [semanticErrors.ERROR_REGISTRY_ALREADY_PAUSED]: "R10",
  [semanticErrors.ERROR_REGISTRY_NOT_PAUSED]: "R11",
  [semanticErrors.ERROR_REGISTRY_NULL_ADDRESS]: "R12",
  [semanticErrors.ERROR_REGISTRY_NULL_ADDRESS]: "R12",
  [semanticErrors.ERROR_REGISTRY_ONLY_PARTIAL_CREATE_PAUSE_ROLE]: "R13",
  [semanticErrors.ERROR_REGISTRY_ONLY_PARTIAL_MINT_PAUSE_ROLE]: "R14",
  [semanticErrors.ERROR_REGISTRY_ONLY_PARTIAL_REDEEM_PAUSE_ROLE]: "R15",
  [semanticErrors.ERROR_REGISTRY_ONLY_PARTIAL_EXECUTE_PAUSE_ROLE]: "R16",
  [semanticErrors.ERROR_REGISTRY_ONLY_PARTIAL_CANCEL_PAUSE_ROLE]: "R17",
  [semanticErrors.ERROR_REGISTRY_ONLY_PARTIAL_CLAIM_RESERVE_PAUSE_ROLE]: "R18",
  [semanticErrors.ERROR_REGISTRY_ONLY_PROTOCOL_UNPAUSER_ROLE]: "R19",
  /// OPIUM POSITION TOKEN ERRORS
  [semanticErrors.ERROR_OPIUM_POSITION_TOKEN_NOT_FACTORY]: "P1",
  /// OPIUM PROXY FACTORY ERRORS
  [semanticErrors.ERROR_OPIUM_PROXY_FACTORY_NOT_CORE]: "F1",
  [semanticErrors.ERROR_OPIUM_PROXY_CUSTOM_POSITION_TOKEN_NAME_TOO_LONG]: "F2",
  /// TOKEN SPENDER ERRORS
  [semanticErrors.ERROR_TOKEN_SPENDER_NOT_WHITELISTED]: "T1",
};
