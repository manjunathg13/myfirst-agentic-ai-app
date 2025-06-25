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
export declare type Frame4OverridesProps = {
    Frame4?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rounded rectangle"?: PrimitiveOverrideProps<ViewProps>;
    AltMPN1?: PrimitiveOverrideProps<TextProps>;
    AltMPN2?: PrimitiveOverrideProps<TextProps>;
    AltMPN3?: PrimitiveOverrideProps<TextProps>;
    "Primary MPN"?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame4Props = React.PropsWithChildren<Partial<ViewProps> & {
    altPartRecommendation?: any;
} & {
    overrides?: Frame4OverridesProps | undefined | null;
}>;
export default function Frame4(props: Frame4Props): React.ReactElement;
