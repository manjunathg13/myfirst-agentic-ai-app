/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1658px"
      height="180px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(83,115,236,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="48.409088134765625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="293.59px"
        height="96px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25%"
        bottom="21.67%"
        left="1.98%"
        right="80.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Infosys"
        {...getOverrideProps(overrides, "Infosys")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="131.57px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="63.33%"
        bottom="10%"
        left="90.67%"
        right="1.4%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign out"
        {...getOverrideProps(overrides, "Sign out")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1003px"
        height="84px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="55.56%"
        bottom="-2.22%"
        left="25.75%"
        right="13.75%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="AI Assistant for BOM Validation and Obsolescence Risk Mitigation"
        {...getOverrideProps(
          overrides,
          "AI Assistant for BOM Validation and Obsolescence Risk Mitigation"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="77.45454406738281px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1040px"
        height="84px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="16.67%"
        bottom="36.67%"
        left="25.75%"
        right="11.52%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Agentic AI Component Engineer"
        {...getOverrideProps(overrides, "Agentic AI Component Engineer")}
      ></Text>
    </View>
  );
}
