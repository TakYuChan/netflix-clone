import React from "react";
import S from "./styles/profiles.style";

export default function Profiles({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <S.List {...restProps}>{children}</S.List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <S.Item {...restProps}>{children}</S.Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <S.Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <S.Name {...restProps}>{children}</S.Name>;
};
