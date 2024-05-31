import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <div className={styles.homeContainer}>
                <h1 className={styles.introTitle}>Welcome to</h1>
                <h1 className={styles.lineBreak}>_________________________</h1>
                <h1 className={styles.title}>Brendan's Portfolio Website</h1>
            </div>

            <div className={styles.itemContainer}>
                {/* <div className={styles.item1}>Item 1</div>
                <div className={styles.item2}>Item 2</div>
                <div className={styles.item3}>Item 3</div> */}
            </div>
        </>
    );
}
