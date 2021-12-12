import { useState, useEffect } from "react";
import "../styles/globals.css";
//currently provider is no longer being used
//import Provider from "../state/provider";

function MyApp({ Component, pageProps }) {
  //
  //this component needs refactoring and DRYer code
  //deactivating the modal can be achieved using just 'entered'
  //'stage' is only needed in order to track how many times the user has been on the home (intro) screen for example, possibly to toggle or update the text to something fun pulled from an API...
  //

  const [stage, setStage] = useState(0);
  const [entered, setEntered] = useState(false);

  const handleStageChange = () => {
    setStage((stage) => stage + 1);
  };

  const handleEntered = () => {
    setEntered(true);
  };

  const state = { stage, entered, handleStageChange, handleEntered };

  useEffect(() => {
    console.log("S:", stage);
  }, [stage]);

  return <Component {...pageProps} value={state} />;
}

export default MyApp;
