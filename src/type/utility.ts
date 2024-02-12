export type ValuesOf<SomeRecord> = SomeRecord extends Record<string | number, infer Value>
    ? Value
    : never;
