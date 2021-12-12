import { useState, useEffect } from "react";
import "../styles/globals.css";
//import Provider from "../state/provider";

function MyApp({ Component, pageProps }) {
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
