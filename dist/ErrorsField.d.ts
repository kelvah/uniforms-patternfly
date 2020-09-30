import { HTMLProps } from 'react';
export declare type ErrorsFieldProps = HTMLProps<HTMLDivElement>;
declare function ErrorsField({ children, ...props }: ErrorsFieldProps): JSX.Element;
declare namespace ErrorsField {
    var defaultProps: {
        style: {
            backgroundColor: string;
            border: string;
            borderRadius: string;
            margin: string;
            padding: string;
        };
    };
}
export default ErrorsField;
