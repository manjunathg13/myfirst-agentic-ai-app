/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAltPartRecommendation } from "../graphql/mutations";
const client = generateClient();
export default function AltPartRecommendationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    MPN: "",
    Description: "",
    AltMPN1: "",
    AltMPN2: "",
    AltMPN3: "",
    LifecycleStatus: "",
    ROHS: "",
    EOL: "",
  };
  const [MPN, setMPN] = React.useState(initialValues.MPN);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [AltMPN1, setAltMPN1] = React.useState(initialValues.AltMPN1);
  const [AltMPN2, setAltMPN2] = React.useState(initialValues.AltMPN2);
  const [AltMPN3, setAltMPN3] = React.useState(initialValues.AltMPN3);
  const [LifecycleStatus, setLifecycleStatus] = React.useState(
    initialValues.LifecycleStatus
  );
  const [ROHS, setROHS] = React.useState(initialValues.ROHS);
  const [EOL, setEOL] = React.useState(initialValues.EOL);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMPN(initialValues.MPN);
    setDescription(initialValues.Description);
    setAltMPN1(initialValues.AltMPN1);
    setAltMPN2(initialValues.AltMPN2);
    setAltMPN3(initialValues.AltMPN3);
    setLifecycleStatus(initialValues.LifecycleStatus);
    setROHS(initialValues.ROHS);
    setEOL(initialValues.EOL);
    setErrors({});
  };
  const validations = {
    MPN: [{ type: "Required" }],
    Description: [],
    AltMPN1: [],
    AltMPN2: [],
    AltMPN3: [],
    LifecycleStatus: [],
    ROHS: [],
    EOL: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.xs.value}
      columnGap={tokens.space.xxxl.value}
      padding={tokens.space.xxxs.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          MPN,
          Description,
          AltMPN1,
          AltMPN2,
          AltMPN3,
          LifecycleStatus,
          ROHS,
          EOL,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAltPartRecommendation.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AltPartRecommendationCreateForm")}
      {...rest}
    >
      <TextField
        label="Primary MPN"
        isRequired={true}
        isReadOnly={false}
        placeholder="Enter the MPN"
        value={MPN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN: value,
              Description,
              AltMPN1,
              AltMPN2,
              AltMPN3,
              LifecycleStatus,
              ROHS,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.MPN ?? value;
          }
          if (errors.MPN?.hasError) {
            runValidationTasks("MPN", value);
          }
          setMPN(value);
        }}
        onBlur={() => runValidationTasks("MPN", MPN)}
        errorMessage={errors.MPN?.errorMessage}
        hasError={errors.MPN?.hasError}
        {...getOverrideProps(overrides, "MPN")}
      ></TextField>
      <TextAreaField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter the MPN Description"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description: value,
              AltMPN1,
              AltMPN2,
              AltMPN3,
              LifecycleStatus,
              ROHS,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextAreaField>
      <TextField
        label="AltMPN1"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter the Alternate MPN1"
        value={AltMPN1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description,
              AltMPN1: value,
              AltMPN2,
              AltMPN3,
              LifecycleStatus,
              ROHS,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.AltMPN1 ?? value;
          }
          if (errors.AltMPN1?.hasError) {
            runValidationTasks("AltMPN1", value);
          }
          setAltMPN1(value);
        }}
        onBlur={() => runValidationTasks("AltMPN1", AltMPN1)}
        errorMessage={errors.AltMPN1?.errorMessage}
        hasError={errors.AltMPN1?.hasError}
        {...getOverrideProps(overrides, "AltMPN1")}
      ></TextField>
      <TextField
        label="AltMPN2"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter the Alternate MPN2"
        value={AltMPN2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description,
              AltMPN1,
              AltMPN2: value,
              AltMPN3,
              LifecycleStatus,
              ROHS,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.AltMPN2 ?? value;
          }
          if (errors.AltMPN2?.hasError) {
            runValidationTasks("AltMPN2", value);
          }
          setAltMPN2(value);
        }}
        onBlur={() => runValidationTasks("AltMPN2", AltMPN2)}
        errorMessage={errors.AltMPN2?.errorMessage}
        hasError={errors.AltMPN2?.hasError}
        {...getOverrideProps(overrides, "AltMPN2")}
      ></TextField>
      <TextField
        label="AltMPN3"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter the Alternate MPN3"
        value={AltMPN3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description,
              AltMPN1,
              AltMPN2,
              AltMPN3: value,
              LifecycleStatus,
              ROHS,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.AltMPN3 ?? value;
          }
          if (errors.AltMPN3?.hasError) {
            runValidationTasks("AltMPN3", value);
          }
          setAltMPN3(value);
        }}
        onBlur={() => runValidationTasks("AltMPN3", AltMPN3)}
        errorMessage={errors.AltMPN3?.errorMessage}
        hasError={errors.AltMPN3?.hasError}
        {...getOverrideProps(overrides, "AltMPN3")}
      ></TextField>
      <TextField
        label="Lifecycle status"
        isRequired={false}
        isReadOnly={false}
        value={LifecycleStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description,
              AltMPN1,
              AltMPN2,
              AltMPN3,
              LifecycleStatus: value,
              ROHS,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.LifecycleStatus ?? value;
          }
          if (errors.LifecycleStatus?.hasError) {
            runValidationTasks("LifecycleStatus", value);
          }
          setLifecycleStatus(value);
        }}
        onBlur={() => runValidationTasks("LifecycleStatus", LifecycleStatus)}
        errorMessage={errors.LifecycleStatus?.errorMessage}
        hasError={errors.LifecycleStatus?.hasError}
        {...getOverrideProps(overrides, "LifecycleStatus")}
      ></TextField>
      <TextField
        label="Rohs"
        isRequired={false}
        isReadOnly={false}
        value={ROHS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description,
              AltMPN1,
              AltMPN2,
              AltMPN3,
              LifecycleStatus,
              ROHS: value,
              EOL,
            };
            const result = onChange(modelFields);
            value = result?.ROHS ?? value;
          }
          if (errors.ROHS?.hasError) {
            runValidationTasks("ROHS", value);
          }
          setROHS(value);
        }}
        onBlur={() => runValidationTasks("ROHS", ROHS)}
        errorMessage={errors.ROHS?.errorMessage}
        hasError={errors.ROHS?.hasError}
        {...getOverrideProps(overrides, "ROHS")}
      ></TextField>
      <TextField
        label="Eol"
        isRequired={false}
        isReadOnly={false}
        value={EOL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MPN,
              Description,
              AltMPN1,
              AltMPN2,
              AltMPN3,
              LifecycleStatus,
              ROHS,
              EOL: value,
            };
            const result = onChange(modelFields);
            value = result?.EOL ?? value;
          }
          if (errors.EOL?.hasError) {
            runValidationTasks("EOL", value);
          }
          setEOL(value);
        }}
        onBlur={() => runValidationTasks("EOL", EOL)}
        errorMessage={errors.EOL?.errorMessage}
        hasError={errors.EOL?.hasError}
        {...getOverrideProps(overrides, "EOL")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.xxxl.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
