/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Group4Hover(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="309px"
      height="273px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(42,51,79,1)"
      {...getOverrideProps(overrides, "Group4Hover")}
      {...rest}
    >
      <View
        width="309px"
        height="273px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(139,214,229,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(27,14,80,1)"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="194px"
        height="121px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27.11%"
        bottom="28.57%"
        left="15.21%"
        right="22.01%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Life Cycle Status Checks"
        {...getOverrideProps(overrides, "Life Cycle Status Checks")}
      ></Text>
    </View>
  );
}
