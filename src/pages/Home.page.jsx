import React from "react";
import JumbotronContainer from "../containers/jumbotron.container";
import FooterContainer from "../containers/footer.container";
import FaqsContainer from "../containers/faqs.container";
import HeaderContainer from "../containers/header.container";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello</p>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
