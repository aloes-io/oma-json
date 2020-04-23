export * from '../interfaces';

export type Resources = {
  [key: string]: any;
};

export type OmaObject = {
  name: string;
  descripiton: string;
  value: number;
  resourceIds: string;
  resources: Resources;
};

export enum Operations {
  'R',
  'W',
  'R,W',
  'E',
}

export enum OmaResourceTypes {
  'Float',
  'Integer',
  'String',
  'Boolean',
  'Time',
  'Opaque',
  'null',
}

export type OmaResource = {
  name: string;
  descripiton: string;
  value: number;
  operations: Operations;
  type: OmaResourceTypes;
};

export type OmaView = {
  name: string;
  value: number;
  resources: Resources;
  icons: string[];
};

export declare const omaObjects: OmaObject[];

export declare const omaResources: OmaResource[];

export declare const omaViews: OmaView[];

export declare const version: string;

export declare const openApi: object;
