import { CheckboxProps, RadioProps, SelectProps } from '@patternfly/react-core';
declare type CheckboxesProps = {
    fieldType?: typeof Array | any;
    onChange: (value?: string | string[]) => void;
    transform?: (value?: string) => string;
    allowedValues: string[];
    id: string;
    disabled?: boolean;
} & (Omit<CheckboxProps, 'isDisabled'> | Omit<RadioProps, 'isDisabled'>);
export declare type SelectFieldProps = {
    checkboxes?: boolean;
} & (CheckboxesProps | SelectProps);
declare const _default: any;
export default _default;
