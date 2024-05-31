import styles from "./About.module.css";
import { bgStylesBlackWhite } from "../../utils/contants";

export default function About() {
    return (
        <>
            <div className={styles.aboutContainer} style={bgStylesBlackWhite}>
                <div className={styles.itemContainer}>
                    <div className={styles.item1}>About 1</div>
                    <div className={styles.item2}>About 2</div>
                    <div className={styles.item3}>About 3</div>
                </div>
            </div>
        </>
    );
}
