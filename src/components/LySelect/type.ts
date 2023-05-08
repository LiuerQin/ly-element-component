
export interface OptionItem {
    label: string;
    value: string;
}

export type Item = string[] | number | string | null;

export type Multiple = boolean;

export type Value = Multiple extends A 
  ? A extends true 
    ? Array<string | number> | undefined 
    : number | string | undefined 
  : never;