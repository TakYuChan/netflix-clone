import React from "react";
import JumbotronContainer from "../containers/jumbotron.container";
import FooterContainer from "../containers/footer.container";
import FaqsContainer from "../containers/faqs.container";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
