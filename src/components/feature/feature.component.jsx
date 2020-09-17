import React from "react";
import S from "./styles/feature.style";

export default function Feature({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <S.FeatureTitle {...restProps}>{children}</S.FeatureTitle>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <S.SubTitle {...restProps}>{children}</S.SubTitle>;
};
