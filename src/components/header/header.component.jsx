import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import S from "./styles/header.style";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <S.Background {...restProps}>{children}</S.Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <S.Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <S.ButtonLink {...restProps}>{children}</S.ButtonLink>;
};
