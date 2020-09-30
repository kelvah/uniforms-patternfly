import React, { HTMLProps } from 'react';
export declare type ErrorFieldProps = {
    error?: any;
    errorMessage?: string;
} & HTMLProps<HTMLDivElement>;
declare const _default: React.FunctionComponent<import("uniforms").Override<ErrorFieldProps, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<string | number | readonly string[]>>, {
    label?: string | boolean;
    name: string;
    placeholder?: string | boolean;
}>>> & {
    Component: React.ComponentType<ErrorFieldProps>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
