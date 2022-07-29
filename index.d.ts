type TupleLastValueType <X extends readonly unknown[]> = X extends readonly [...unknown[], infer Type]
    ? Type
    : never;

export default TupleLastValueType;