import React from "react";
import S from "./styles/opt-form.style";

export default function OptForm({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <S.Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <S.Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </S.Button>
  );
};

OptForm.Break = function OptBreak({ ...restProps }) {
  return <S.Break {...restProps} />;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};
