/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * report energy consumption (Cumulative Power) of an electrical load. An example measurement unit is Watt Hours (ucum:W*h)
 */
export interface Energy {
  /**
   * If present, the type of sensor defined as the UCUM Unit Definition e.g. “Cel” for Temperature in Celcius.
   */
  "5701": string;
  /**
   * The application type of the sensor or actuator as a string, for instance, “Air Pressure”.
   */
  "5750": string;
  /**
   * The total power in Wh that the light has used.
   */
  "5805": number;
  /**
   * Reset both cumulative active/reactive power.
   */
  "5822": string;
}
