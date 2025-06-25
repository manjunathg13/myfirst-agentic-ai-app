/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function EOL(props) {
  const { altPartRecommendation, overrides, ...rest } = props;
  return (
    <View
      width="575px"
      height="36px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(30,30,30,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EOL")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(30,30,30,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.25px"
        width="239px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.MPN}
        {...getOverrideProps(overrides, "MPN")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(30,30,30,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="259px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="7px"
        left="302px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.EOL}
        {...getOverrideProps(overrides, "EOL88117")}
      ></Text>
    </View>
  );
}
