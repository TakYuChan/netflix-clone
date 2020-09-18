import React from "react";
import BrowseContainer from "../containers/browse.container";
import selectionMap from "../utils/selectionMap";
import useContent from "../hooks/useContent";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionMap({ series, films });

  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
