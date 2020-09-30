import React, { Ref } from 'react';
import { TextInputProps } from '@patternfly/react-core';
export declare type TextFieldProps = {
    id: string;
    decimal?: boolean;
    inputRef?: Ref<HTMLInputElement>;
    onChange: (value?: string) => void;
    value?: string;
    disabled: boolean;
    error?: boolean;
} & Omit<TextInputProps, 'isDisabled'>;
declare const _default: React.FunctionComponent<import("uniforms").Override<TextFieldProps, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<string>>, {
    label?: string | boolean;
    name: string;
    placeholder?: string | boolean;
}>>> & {
    Component: React.ComponentType<TextFieldProps>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
