import { Component } from "vue";

type ValueOf<T> = T[keyof T];

export type Attrs = {
  [k: string]: unknown;
};

export type LyFormItem = {
  attrs: Attrs & { label?: string; prop: string };
  component: {
    componentIs: string | Component;
    attrs?: Attrs;
  };
};

export type LyFormItems = LyFormItem[];

export type LyFormData = {
  [k: string | symbol | number]: string | number | boolean;
};

export type LyFormDataValueType = ValueOf<LyFormData>;
