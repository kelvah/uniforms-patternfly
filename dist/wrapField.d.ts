/// <reference types="react" />
import { FormGroupProps } from '@patternfly/react-core';
declare module 'uniforms' {
    interface FilterDOMProps {
        decimal: never;
        minCount: never;
        autoValue: never;
        isDisabled: never;
        checkboxes: never;
    }
}
declare type WrapperProps = {
    id: string;
    error?: boolean;
    errorMessage?: string;
    help?: string;
    showInlineError?: boolean;
} & Omit<FormGroupProps, 'onChange' | 'fieldId'>;
export default function wrapField({ id, label, type, disabled, error, errorMessage, showInlineError, help, required, ...props }: WrapperProps, children: any): JSX.Element;
export {};
