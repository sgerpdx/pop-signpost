import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

//component imports
import Layout from "../components/layout";
import ProjectHeader from "../components/projectHeader";
import SingleProject from "../components/singleProject";

//image imports
import { Spinner } from "@chakra-ui/spinner";

//individual project screencaps:
import DesignasaurImage from "../public/Projects_Designasaur-Park_680.jpg";
import ElseImage from "../public/Projects_Else-By-Elsewhere_680.jpg";
import GreetingImage from "../public/Projects_Greeting-Art_680.jpg";
import SimpleSmoreImage from "../public/Projects_Simple-Smore.png";
import AdventCalWIP from "../public/advent-cal.png";

//individual project description components:
import Greeting from "../components/individualProjects/greeting";
import Elsewhere from "../components/individualProjects/elsewhere";
import Designasaur from "../components/individualProjects/designasaur";
import Smore from "../components/individualProjects/smore";

//props to hand down to individual SingleProject components:
//[GitHub URL, Deployed URL, Project Image, Project Title, Descriptive Text]

export default function Projects({ value }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Spinner color="white" />;

  return (
    <Layout>
      <main className={styles.container}>
        <section className={styles.upperContainer}>
          <section className={styles.topRow}>
            <ProjectHeader value={value} />
          </section>
          <div className={styles.scrollBorder}></div>
        </section>

        <section className={styles.lowerContainer}>
          <section className={styles.projectScrollArea}>
            <div
              style={{
                width: "100%",
                margin: "40px",
                backgroundColor: "white",
                color: "#353434",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3>Current WIP: Calendoors</h3>
              <figure
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Image
                  src={AdventCalWIP}
                  width="270"
                  height="216"
                  alt="screenshot of app"
                />
                <figcaption
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.9em",
                    width: "270px",
                    backgroundColor: "#71c0bb",
                    marginTop: "4px",
                  }}
                >
                  from the folksy original
                </figcaption>
              </figure>
              <p>
                I&apos;m working on a &apos;daily-reveal calendar app&apos; that
                is an outgrowth of a digital Advent Calendar that I made as a
                gift this past December. Using React/Nextjs with a Firebase
                back-end, it will allow the user to create an account and set up
                customized calendars that facilitate content-reveals at
                scheduled intervals, e.g. today&apos;s 'door' can be opened by
                the recipient-user, who will then be able to access whatever
                information or media the admin-user has loaded behind that door.
                I&apos;m also planning to implement TypeScript and Tailwind CSS
                once the MVP has been achieved.
              </p>
            </div>
            <SingleProject
              projectName="Greeting Art"
              projectImage={GreetingImage}
              deployed="https://greeting-art.netlify.app/"
              github="https://github.com/Greeting-Art"
              isVisible="visible"
              projectText={<Greeting />}
            />
            <SingleProject
              projectName="Else By Elsewhere"
              projectImage={ElseImage}
              deployed="https://else-by-elsewhere.netlify.app/"
              github="https://github.com/where-in-the-search"
              isVisible="visible"
              projectText={<Elsewhere />}
            />
            <SingleProject
              projectName="Designasaur Park"
              projectImage={DesignasaurImage}
              deployed="https://designosaurpark.github.io/DesignasaurPark/"
              github="https://github.com/DesignosaurPark/DesignasaurPark"
              isVisible="visible"
              projectText={<Designasaur />}
            />
            <SingleProject
              projectName="S'mple S'more"
              projectImage={SimpleSmoreImage}
              deployed="https://samger.itch.io/smplsmore"
              // github="https://itch.io/jam/stop-waiting-for-godot"
              isVisible="hidden"
              projectText={<Smore />}
            />
          </section>
        </section>
      </main>
    </Layout>
  );
}
