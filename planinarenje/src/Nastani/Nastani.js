import React from "react";
import NastanCover from "../components/NastanCover";
import NastanContent from "../components/NastanContent";
import NastanInfo from "../components/NastanInfo";

function Nastani() {
  return (
    <div style={{ backgroundColor: "#ebebeb" }}>
      <NastanCover></NastanCover>
      <NastanContent></NastanContent>
      <NastanInfo></NastanInfo>
    </div>
  );
}

export default Nastani;
