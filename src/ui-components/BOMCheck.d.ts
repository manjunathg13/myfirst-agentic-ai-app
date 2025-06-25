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
export declare type BOMCheckOverridesProps = {
    BOMCheck?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Complete BOM Check"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BOMCheckProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BOMCheckOverridesProps | undefined | null;
}>;
export default function BOMCheck(props: BOMCheckProps): React.ReactElement;
