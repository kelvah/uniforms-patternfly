/// <reference types="react" />
import { ButtonProps } from '@patternfly/react-core';
export declare type ListAddFieldProps = {
    initialCount?: number;
    parent?: any;
    name: string;
    disabled?: boolean;
    value?: unknown;
} & ButtonProps;
declare function ListAdd({ disabled, name, value, ...props }: ListAddFieldProps): JSX.Element;
export default ListAdd;
