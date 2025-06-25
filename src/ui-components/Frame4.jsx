/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Frame4(props) {
  const { altPartRecommendation, overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="229px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(30,30,30,1)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame4")}
      {...rest}
    >
      <View
        width="336px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="81px"
        left="7px"
        border="1px SOLID rgba(30,30,30,1)"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Rectangle 8")}
      ></View>
      <View
        width="336px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="185px"
        left="7px"
        border="1px SOLID rgba(30,30,30,1)"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Rectangle 10")}
      ></View>
      <View
        width="336px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="133px"
        left="7px"
        border="1px SOLID rgba(30,30,30,1)"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Rounded rectangle")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.13px"
        width="314px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="91px"
        left="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.AltMPN1}
        {...getOverrideProps(overrides, "AltMPN1")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.13px"
        width="314px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="143px"
        left="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.AltMPN2}
        {...getOverrideProps(overrides, "AltMPN2")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.13px"
        width="320px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="194px"
        left="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.AltMPN3}
        {...getOverrideProps(overrides, "AltMPN3")}
      ></Text>
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
        width="319.62px"
        height="29.65px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.24%"
        bottom="81.81%"
        left="4.17%"
        right="7.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.MPN}
        {...getOverrideProps(overrides, "Primary MPN")}
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
        width="328px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.34%"
        bottom="69%"
        left="4.17%"
        right="4.72%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={altPartRecommendation?.Description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </View>
  );
}
