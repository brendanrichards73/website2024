import styles from "./Contact.module.css";
import { bgStylesBlackWhite } from "../../utils/contants";

export default function Contact() {
    return (
        <>
            <div className={styles.contactContainer} style={bgStylesBlackWhite}>
                <div className={styles.itemContainer}>
                    <div className={styles.email}>
                        email: brendan.richards@btinternet.com
                    </div>
                    <a
                        href="https://www.linkedin.com/in/brendan-richards73"
                        target="_blank"
                        className={styles.linkedIn}
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </>
    );
}
