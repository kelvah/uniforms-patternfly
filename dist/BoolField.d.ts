import React from 'react';
import { CheckboxProps } from '@patternfly/react-core';
export declare type BoolFieldProps = {
    appearance?: 'checkbox' | 'switch';
    label?: string;
    legend?: string;
    onChange?: (value: any) => void;
    transform?: (label?: string) => string;
    disabled: boolean;
} & Omit<CheckboxProps, 'isDisabled'>;
declare const _default: React.FunctionComponent<import("uniforms").Override<{
    [x: string]: any;
    disabled: any;
    id: any;
    inputRef: any;
    label: any;
    name: any;
    onChange: any;
    value: any;
    toggle: any;
}, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<any>>, {
    label?: any;
    name: string;
    placeholder?: any;
}>>> & {
    Component: React.ComponentType<{
        [x: string]: any;
        disabled: any;
        id: any;
        inputRef: any;
        label: any;
        name: any;
        onChange: any;
        value: any;
        toggle: any;
    }>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
