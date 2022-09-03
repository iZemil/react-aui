export type Nullable<T> = T | null;

export type TValueOf<T> = T[keyof T];

export type TPrimitives = string | boolean | number | null | undefined;
