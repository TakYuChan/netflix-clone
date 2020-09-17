import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes.constants";
import { FirebaseContext } from "../context/firebaseContext";
import SelectProfileContainer from "./profiles.container";
import FooterContainer from "./footer.container";

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: "Karl",
    photoURL: "1",
  };

  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
