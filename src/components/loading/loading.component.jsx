import React from "react";
import S from "./styles/loading.style";

function Loading({ src, ...restProps }) {
  return (
    <S.Spinner {...restProps}>
      <S.LockBody />
      <S.Picture src={`/images/users/${src}.png`} />
    </S.Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <S.ReleaseBody />;
};

export default Loading;
