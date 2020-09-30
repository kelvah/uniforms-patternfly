/// <reference types="react" />
import { ButtonProps } from '@patternfly/react-core';
export declare type ListDelFieldProps = {
    name: string;
    parent?: any;
    value?: unknown;
} & ButtonProps;
declare function ListDel({ name, disabled, ...props }: ListDelFieldProps): JSX.Element;
export default ListDel;
