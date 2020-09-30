import React, { Ref } from 'react';
import { TextInputProps } from '@patternfly/react-core';
export declare type NumFieldProps = {
    id: string;
    decimal?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    onChange: (value?: number) => void;
    disabled: boolean;
    value?: number;
    error?: boolean;
} & Omit<TextInputProps, 'isDisabled'>;
declare const _default: React.FunctionComponent<import("uniforms").Override<NumFieldProps, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<number>>, {
    label?: string | boolean;
    name: string;
    placeholder?: string | boolean;
}>>> & {
    Component: React.ComponentType<NumFieldProps>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
