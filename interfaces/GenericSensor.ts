/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * It is based on the description of a value and a unit according to the UCUM specification. Thus, any type of value defined within this specification can be reporting using this object. Specific object for a given range of sensors is described later in the document, enabling to identify the type of sensors directly from its Object ID. This object may be used as a generic object if a dedicated one does not exist.
 */
export interface GenericSensor {
  /**
   * The minimum value that can be measured by the sensor
   */
  "5601": number;
  /**
   * The maximum value that can be measured by the sensor.
   */
  "5602": number;
  /**
   * The minimum value that can be measured by the sensor.
   */
  "5603": number;
  /**
   * The maximum value that can be measured by the sensor.
   */
  "5604": number;
  /**
   * Reset the Min and Max Measured Values to Current Value.
   */
  "5605": string;
  /**
   * Last or Current Measured Value from the Sensor.
   */
  "5700": number;
  /**
   * If present, the type of sensor defined as the UCUM Unit Definition e.g. “Cel” for Temperature in Celcius.
   */
  "5701": string;
  /**
   * The application type of the sensor or actuator as a string, for instance, “Air Pressure”.
   */
  "5750": string;
  /**
   * The type of the sensor (for instance PIR type).
   */
  "5751": string;
}