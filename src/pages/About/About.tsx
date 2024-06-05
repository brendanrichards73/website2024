import styles from "./About.module.css";
import { bgStylesBlackWhite } from "../../utils/contants";
import portraitImage from "../../images/portrait.jpg";
import schoolOfCodeImage from "../../images/SoC-Logo.jpg";
import economistImage from "../../images/economist-app.jpg";
import teachingImage from "../../images/teaching.jpg";

export default function About() {
    return (
        <div className={styles.aboutContainer} style={bgStylesBlackWhite}>
            <h1 className={styles.aboutTitle}>All about me</h1>
            <div className={styles.row}>
                <img
                    className={styles.image1}
                    src={portraitImage}
                    alt="Brendan Richards portrait"
                />
                <p className={styles.sectionText}>
                    I am an experienced JavaScript, TypeScript, React Native,
                    React, and Node.js developer with 5 years in the industry, I
                    am proficient in React-Native with a strong problem-solving
                    aptitude to enhance application performance, I consistently
                    deliver projects within deadlines, improving product
                    lifecycle speed. <br />I have experience in various testing
                    methodologies, including Jest for unit testing and Detox for
                    end-to-end testing. <br /> I have successfully managed
                    mobile app releases on both iOS and Android, ensuring
                    seamless deployment and high-quality performance. My
                    experience extends to Scrum Master, facilitating Agile and
                    Waterfall projects, and prioritizing critical features and
                    bug fixes using Jira. <br />I have collaborated on a daily
                    basis with complex stakeholders in the UK and
                    internationally to develop and maintain an international
                    mobile application for a blue-chip business. <br /> I pride
                    myself of being highly disciplined, motivated, and adept at
                    leading and supporting teams across diverse projects, with
                    strong communication skills with a proven ability to
                    collaborate effectively with stakeholders at all levels.
                    Resulting in consistently exceeding business expectations
                    and delivering results aligned with business and customer
                    needs.
                </p>
            </div>
            <div className={styles.row}>
                <p className={styles.sectionText}>
                    I began my career in development working for The Economist
                    Group. I began as a junior engineer back in 2019, working
                    alongside a senior engineer and eight third party engineers
                    based in Slovakia. The tech stack utilised was React-Native,
                    Typescript, Apollo Client using GraphQL, and an in house
                    backend build with Typescript and AWS. <br /> In my time at
                    the Economist I have been a part of the app's growth, from a
                    single React-Native app released only to the Apple store to
                    a fully transplanted app that is published to both the iOS
                    App store and Google Play stores and part of a mobile team
                    that contained 40+ mobile enginners, across four squads.
                </p>
                <img
                    className={styles.image2}
                    src={economistImage}
                    alt="School of Code"
                />
            </div>
            <div className={styles.row}>
                <img
                    className={styles.image3}
                    src={schoolOfCodeImage}
                    alt="School of Code"
                />
                <p className={styles.sectionText}>
                    My journey in coding in January 2019, having attended a
                    sixteen week bootcamp at the School of Code, Birmingham. I
                    learned a great deal about web development, gained
                    experience working in Agile teams, creating group projects
                    in React from the ground up, expressing my creative talents
                    within technology.
                </p>
            </div>
            <div className={styles.row}>
                <p className={styles.sectionText}>
                    Prior to development, I was a primary school teacher for 16
                    years, teaching in four schools in Worcestershire and
                    Herefordshire. I spent the majority of my time in Year 5 and
                    6, teaching the full curriculum, including SATs preparation,
                    and ICT Co-ordination.
                </p>
                <img
                    className={styles.image4}
                    src={teachingImage}
                    alt="teaching"
                />
            </div>
        </div>
    );
}
