import React from "react";
import S from "./styles/form.style";

export default function Form({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <S.Base {...restProps}>{children}</S.Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <S.TextSmall {...restProps}>{children}</S.TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <S.Link {...restProps}>{children}</S.Link>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <S.Error {...restProps}>{children}</S.Error>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <S.Input {...restProps}>{children}</S.Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <S.Submit {...restProps}>{children}</S.Submit>;
};
