import { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // notes:
  // this component needs refactoring and DRY-er code
  // deactivating the modal can be achieved using just 'entered'
  // 'stage' is only needed in order to track how many times the user has been on the home (intro) screen for example, possibly to toggle or update the text to something fun pulled from an API after the initial visit...
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

  return (
    <div
      style={{
        background: `linear-gradient(#353434, transparent, #353434),
    url("/seamles_topopatt04_edit-01-480.png")`,
      }}
    >
      <Head>
        <title>Sam Gerber</title>
        <meta property="my-title" content="Sam Gerber" key="title" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sam Gerber" />
        <meta name="twitter:site" content="samgerber.dev" />
        <meta
          name="twitter:description"
          content="software dev portfolio site"
        />
        <meta name="twitter:image" content="/site-sc-360.png" />
        <link rel="icon" href="/saturn-simple.png" type="image/png" />
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} value={state} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
