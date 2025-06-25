/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";

import { View } from "@aws-amplify/ui-react";
export default function Group5(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="640px"
      height="386px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group5")}
      {...rest}
    >
      <ParameterSelection
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 193px - 0px)"
        left="calc(50% - 320px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ParameterSelection")}
      ></ParameterSelection>
    </View>
  );
}
