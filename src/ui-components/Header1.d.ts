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
export declare type Header1OverridesProps = {
    Header1?: PrimitiveOverrideProps<ViewProps>;
    "Agentic AI Component Engineer"?: PrimitiveOverrideProps<TextProps>;
    "AI Assistant for BOM Validation and Obsolescence Risk Mitigation"?: PrimitiveOverrideProps<TextProps>;
    Infosys?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Sign out"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Header1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Header1OverridesProps | undefined | null;
}>;
export default function Header1(props: Header1Props): React.ReactElement;
