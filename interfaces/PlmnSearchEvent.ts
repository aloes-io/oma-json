/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * List of all PLMNs found during the initial search/scan
 */
export interface PlmnSearchEvent {
  /**
   * PLMN - mcc/mnc
   */
  "6030": number;
  /**
   * Band indicator
   */
  "6031": number;
  /**
   * EARFCN - frequency
   */
  "6032": number;
}