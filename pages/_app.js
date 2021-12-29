import { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

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
          content="My Portfolio Site -- Full Stack Software Engineer"
        />
        <meta
          name="twitter:image"
          content="https://pop-portfolio-bucket.s3.us-west-2.amazonaws.com/sc_prod_no-modal-cube-360.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAU7ADNKLOSFWTOALT%2F20211229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211229T070430Z&X-Amz-Expires=60&X-Amz-Signature=678d0de9db09092839c463eeacea17c921f8f732cf3fa8d257d9519657b32249&X-Amz-SignedHeaders=host"
        />
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
