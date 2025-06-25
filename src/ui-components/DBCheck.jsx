/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function DBCheck(props) {
  const { altPartRecommendation, overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="58px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DBCheck")}
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
        top="18px"
        left="11px"
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
        width="143px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="254px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.LifecycleStatus}
        {...getOverrideProps(overrides, "Status")}
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
        width="110px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="412px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.EOL}
        {...getOverrideProps(overrides, "EOL")}
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
        width="260px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="550px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.ROHS}
        {...getOverrideProps(overrides, "ROHS")}
      ></Text>
    </View>
  );
}
