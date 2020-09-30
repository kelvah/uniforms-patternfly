import React, { Ref } from 'react';
import { TextArea, TextAreaProps } from '@patternfly/react-core';
export declare type LongTextFieldProps = {
    onChange: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    inputRef: Ref<TextArea>;
    value?: string;
    prefix?: string;
} & TextAreaProps;
declare const _default: React.FunctionComponent<import("uniforms").Override<{
    [x: string]: any;
    disabled: any;
    id: any;
    inputRef: any;
    label: any;
    name: any;
    onChange: any;
    placeholder: any;
    value: any;
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
        placeholder: any;
        value: any;
    }>;
    options: {
        initialValue?: boolean;
        kind?: "leaf" | "node";
    };
};
export default _default;
