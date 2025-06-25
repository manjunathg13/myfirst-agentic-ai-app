/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AltPartRecommendationCreateFormInputValues = {
    MPN?: string;
    Description?: string;
    AltMPN1?: string;
    AltMPN2?: string;
    AltMPN3?: string;
    LifecycleStatus?: string;
    ROHS?: string;
    EOL?: string;
};
export declare type AltPartRecommendationCreateFormValidationValues = {
    MPN?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    AltMPN1?: ValidationFunction<string>;
    AltMPN2?: ValidationFunction<string>;
    AltMPN3?: ValidationFunction<string>;
    LifecycleStatus?: ValidationFunction<string>;
    ROHS?: ValidationFunction<string>;
    EOL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AltPartRecommendationCreateFormOverridesProps = {
    AltPartRecommendationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MPN?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    AltMPN1?: PrimitiveOverrideProps<TextFieldProps>;
    AltMPN2?: PrimitiveOverrideProps<TextFieldProps>;
    AltMPN3?: PrimitiveOverrideProps<TextFieldProps>;
    LifecycleStatus?: PrimitiveOverrideProps<TextFieldProps>;
    ROHS?: PrimitiveOverrideProps<TextFieldProps>;
    EOL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AltPartRecommendationCreateFormProps = React.PropsWithChildren<{
    overrides?: AltPartRecommendationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AltPartRecommendationCreateFormInputValues) => AltPartRecommendationCreateFormInputValues;
    onSuccess?: (fields: AltPartRecommendationCreateFormInputValues) => void;
    onError?: (fields: AltPartRecommendationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AltPartRecommendationCreateFormInputValues) => AltPartRecommendationCreateFormInputValues;
    onValidate?: AltPartRecommendationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AltPartRecommendationCreateForm(props: AltPartRecommendationCreateFormProps): React.ReactElement;
