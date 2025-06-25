/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AltPartRecommendationUpdateFormInputValues = {
    MPN?: string;
    Description?: string;
    AltMPN1?: string;
    AltMPN2?: string;
    AltMPN3?: string;
    LifecycleStatus?: string;
    ROHS?: string;
    EOL?: string;
};
export declare type AltPartRecommendationUpdateFormValidationValues = {
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
export declare type AltPartRecommendationUpdateFormOverridesProps = {
    AltPartRecommendationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MPN?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    AltMPN1?: PrimitiveOverrideProps<TextFieldProps>;
    AltMPN2?: PrimitiveOverrideProps<TextFieldProps>;
    AltMPN3?: PrimitiveOverrideProps<TextFieldProps>;
    LifecycleStatus?: PrimitiveOverrideProps<TextFieldProps>;
    ROHS?: PrimitiveOverrideProps<TextFieldProps>;
    EOL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AltPartRecommendationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AltPartRecommendationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    altPartRecommendation?: any;
    onSubmit?: (fields: AltPartRecommendationUpdateFormInputValues) => AltPartRecommendationUpdateFormInputValues;
    onSuccess?: (fields: AltPartRecommendationUpdateFormInputValues) => void;
    onError?: (fields: AltPartRecommendationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AltPartRecommendationUpdateFormInputValues) => AltPartRecommendationUpdateFormInputValues;
    onValidate?: AltPartRecommendationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AltPartRecommendationUpdateForm(props: AltPartRecommendationUpdateFormProps): React.ReactElement;
