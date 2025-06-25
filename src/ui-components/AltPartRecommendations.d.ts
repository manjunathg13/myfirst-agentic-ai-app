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
export declare type AltPartRecommendationsOverridesProps = {
    AltPartRecommendations?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Primary MPN"?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Alt3?: PrimitiveOverrideProps<TextProps>;
    Alt1?: PrimitiveOverrideProps<TextProps>;
    Alt2?: PrimitiveOverrideProps<TextProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AltPartRecommendationsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AltPartRecommendationsOverridesProps | undefined | null;
}>;
export default function AltPartRecommendations(props: AltPartRecommendationsProps): React.ReactElement;
