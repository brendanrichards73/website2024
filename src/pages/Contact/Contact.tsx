import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <>
            <div className={styles.contactContainer}>
                <div className={styles.itemContainer}>
                    <div className={styles.item1}>Contact 1</div>
                    <div className={styles.item2}>Contact 2</div>
                    <div className={styles.item3}>Contact 3</div>
                </div>
            </div>
        </>
    );
}
