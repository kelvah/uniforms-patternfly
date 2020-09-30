import React, { ReactNode } from 'react';
import { HTMLFieldProps } from 'uniforms/es5';
export declare type ListFieldProps = HTMLFieldProps<unknown[], HTMLDivElement, {
    children?: ReactNode;
    info?: string;
    error?: boolean;
    initialCount?: number;
    itemProps?: object;
    showInlineError?: boolean;
}>;
declare module 'uniforms' {
    interface FilterDOMProps {
        wrapperCol: never;
        labelCol: never;
    }
}
declare const _default: React.FunctionComponent<import("uniforms").Override<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<unknown[]> & {
    children?: React.ReactNode;
    info?: string;
    error?: boolean;
    initialCount?: number;
    itemProps?: object;
    showInlineError?: boolean;
}>, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<unknown[]>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean;
}>>> & {
    Component: React.ComponentType<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<unknown[]> & {
        children?: React.ReactNode;
        info?: string;
        error?: boolean;
        initialCount?: number;
        itemProps?: object;
        showInlineError?: boolean;
    }>>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
