import React, { HTMLProps } from 'react';
export declare type NestFieldProps = {
    error?: boolean;
    errorMessage?: string;
    fields?: any[];
    itemProps?: object;
    showInlineError?: boolean;
    disabled?: boolean;
    name: string;
} & HTMLProps<HTMLDivElement>;
declare const _default: React.FunctionComponent<import("uniforms").Override<NestFieldProps, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<string | number | readonly string[]>>, {
    label?: string | boolean;
    name: string;
    placeholder?: string | boolean;
}>>> & {
    Component: React.ComponentType<NestFieldProps>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
