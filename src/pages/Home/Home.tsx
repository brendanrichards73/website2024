import styles from "./Home.module.css";
import { bgStyles } from "../../utils/contants";

export default function Home() {
    return (
        <>
            <div className={styles.homeContainer} style={bgStyles}>
                <h1 className={styles.introTitle}>Welcome to</h1>
                <h1 className={styles.lineBreak}>_________________________</h1>
                <h1 className={styles.title}>Brendan's Portfolio Website</h1>
                <h1 className={styles.tagLine}>
                    React Developer & React Native Mobile Developer
                </h1>
            </div>
        </>
    );
}
