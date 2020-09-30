import { ComponentType } from 'react';
import AutoField from './AutoField';
export declare type AutoFieldsProps = {
    autoField?: ComponentType<{
        name: string;
    }>;
    element?: ComponentType | string;
    fields?: string[];
    omitFields?: string[];
};
declare function AutoFields({ autoField, element, fields, omitFields, ...props }: AutoFieldsProps): import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
declare namespace AutoFields {
    var defaultProps: {
        autoField: typeof AutoField;
        element: string;
        omitFields: any[];
    };
}
export default AutoFields;
