import React from "react";

import S from "./styles/jumbotron.style";
// Compound Component design pattern

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <S.Item {...restProps}>
      <S.Inner direction={direction}>{children}</S.Inner>
    </S.Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Jumbotron.SubTitle = function JunbotronSubTitle({ children, ...restProps }) {
  return <S.SubTitle {...restProps}>{children}</S.SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <S.Pane {...restProps}>{children}</S.Pane>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <S.Image {...restProps} />;
};
