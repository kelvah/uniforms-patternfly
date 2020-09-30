import { ComponentType } from 'react';
import { Override, connectField } from 'uniforms/es5';
export declare type AutoFieldProps = Override<Record<string, unknown>, {
    component?: ComponentType<any> | ReturnType<typeof connectField>;
    name: string;
}>;
export default function AutoField(originalProps: AutoFieldProps): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
