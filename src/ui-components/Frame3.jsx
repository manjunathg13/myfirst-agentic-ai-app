/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Frame3(props) {
  const { altPartRecommendation, overrides, ...rest } = props;
  return (
    <Flex
      gap="6px"
      direction="column"
      width="293px"
      height="114px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(227,227,227,1)"
      borderRadius="15px"
      padding="7px 8px 7px 8px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame3")}
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
        width="unset"
        height="28px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
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
        width="unset"
        height="27px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.Description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </Flex>
  );
}
