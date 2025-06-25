/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function DBCheckB(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="520px"
      height="166px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DBCheckB")}
      {...rest}
    >
      <View
        width="520px"
        height="166px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(83,115,236,1)"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="700"
        color="rgba(83,115,236,1)"
        lineHeight="58.09090805053711px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="436.18px"
        height="62.63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31.33%"
        bottom="30.95%"
        left="8.08%"
        right="8.04%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Complete DB Check"
        {...getOverrideProps(overrides, "Complete DB Check")}
      ></Text>
    </View>
  );
}
