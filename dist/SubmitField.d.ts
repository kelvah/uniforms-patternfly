/// <reference types="react" />
import { ButtonProps } from '@patternfly/react-core';
export declare type SubmitFieldProps = {
    inputRef: undefined;
    name: string;
    disabled: boolean;
} & Omit<ButtonProps, 'isDisabled'>;
declare function SubmitField({ disabled, inputRef, value, ...props }: SubmitFieldProps): JSX.Element;
declare namespace SubmitField {
    var defaultProps: {
        value: string;
    };
}
export default SubmitField;
