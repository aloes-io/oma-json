/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Presence sensor with digital sensing, optional delay parameters
 */
export interface PresenceSensor {
  /**
   * The current state of a digital input.
   */
  "5500"?: boolean;
  /**
   * The cumulative value of active state detected.
   */
  "5501"?: number;
  /**
   * Reset the Counter value.
   */
  "5505"?: string;
  /**
   * The type of the sensor (for instance PIR type).
   */
  "5751"?: string;
  /**
   * Delay from the detection state to the clear state in ms.
   */
  "5903"?: number;
  /**
   * Delay from the clear state to the busy state in ms.
   */
  "5904"?: number;
}
