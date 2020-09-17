import React, { useContext } from "react";
import S from "./styles/accordion.style";

import {
  ToggleContextProvider,
  ToggleContext,
} from "../../context/toggleContext";

// const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <S.Container {...restProps}>
      <S.Inner>{children}</S.Inner>
    </S.Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return (
    <ToggleContextProvider>
      <S.Item {...restProps}>{children}</S.Item>
    </ToggleContextProvider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <S.Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </S.Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <S.Body {...restProps}>{children}</S.Body>;
};
