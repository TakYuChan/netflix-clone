import React, { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import S from "./styles/header.style";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <S.Background {...restProps}>{children}</S.Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <S.Search {...restProps}>
      <S.SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </S.SearchIcon>
      <S.SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search files and series"
        active={searchActive}
      />
    </S.Search>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <S.Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <S.ButtonLink {...restProps}>{children}</S.ButtonLink>;
};

Header.Link = function HeaderButtonLink({ children, ...restProps }) {
  return <S.Link {...restProps}>{children}</S.Link>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <S.Feature>{children}</S.Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <S.FeatureCallOut>{children}</S.FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <S.PlayButton {...restProps}>{children}</S.PlayButton>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <S.Profile {...restProps}>{children}</S.Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <S.Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDRopdown({ children, ...restProps }) {
  return <S.Dropdown {...restProps}>{children}</S.Dropdown>;
};
