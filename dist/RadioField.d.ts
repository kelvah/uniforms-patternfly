import React from 'react';
import { RadioProps } from '@patternfly/react-core';
export declare type RadioFieldProps = {
    transform?: (string?: string) => string;
    allowedValues: string[];
    onChange: (string: any) => void;
    value?: string;
    disabled: boolean;
} & Omit<RadioProps, 'isDisabled'>;
declare const _default: React.FunctionComponent<import("uniforms").Override<RadioFieldProps, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<string | (string & readonly string[])>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean;
}>>> & {
    Component: React.ComponentType<RadioFieldProps>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
