/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * represents GPS coordinates. This object is compatible with the LWM2M management object for location, but uses reusable resources.
 */
export interface GpsLocation {
  /**
   * The decimal notation of latitude, e.g. -43.5723 (World Geodetic System 1984).
   */
  "5514": string;
  /**
   * The decimal notation of longitude, e.g. 153.21760 (World Geodetic System 1984).
   */
  "5515": string;
  /**
   * The accuracy of the position in meters.
   */
  "5516": string;
  /**
   * The velocity of the device as defined in 3GPP 23.032 GAD specification. This set of values may not be available if the device is static.
   */
  "5517": {
    [k: string]: any;
  };
  /**
   * The timestamp of when the location measurement was performed.
   */
  "5518": string;
  /**
   * The compass direction.
   */
  "5705": number;
}