/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Desktop1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(42,51,79,1)"
      {...getOverrideProps(overrides, "Desktop1")}
      {...rest}
    >
      <View
        width="364px"
        height="115px"
        {...getOverrideProps(overrides, "Alt Search")}
      ></View>
      <View
        width="364px"
        height="115px"
        {...getOverrideProps(overrides, "LC status Check")}
      ></View>
      <View
        width="364px"
        height="115px"
        {...getOverrideProps(overrides, "BOM Check")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="1052px"
        height="174px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="44px"
        left="126px"
        {...getOverrideProps(overrides, "Header1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(245,245,245,1)"
          lineHeight="58.09090805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="804px"
          height="96px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="44.83%"
          left="23.57%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Agentic AI Component Engineer"
          {...getOverrideProps(overrides, "Agentic AI Component Engineer")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="500"
          color="rgba(245,245,245,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="783px"
          height="96px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="0px"
          left="calc(50% - 391.5px - -105.5px)"
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
          fontSize="40px"
          fontWeight="700"
          color="rgba(245,245,245,1)"
          lineHeight="48.409088134765625px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="189px"
          height="107px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.92%"
          bottom="27.59%"
          left="0%"
          right="82.03%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="INFOSYS&#xA;LOGO"
          {...getOverrideProps(overrides, "INFOSYS LOGO")}
        ></Text>
      </View>
    </View>
  );
}
