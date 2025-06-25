/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LifeCycleStatusOverridesProps = {
    LifeCycleStatus?: PrimitiveOverrideProps<ViewProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    MPN?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LifeCycleStatusProps = React.PropsWithChildren<Partial<ViewProps> & {
    altPartRecommendation?: any;
} & {
    overrides?: LifeCycleStatusOverridesProps | undefined | null;
}>;
export default function LifeCycleStatus(props: LifeCycleStatusProps): React.ReactElement;
