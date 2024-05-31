import styles from "./Portfolio.module.css";

export default function Portfolio() {
    return (
        <>
            <div className={styles.portfolioContainer}>
                <h1 className={styles.portfolioTitle}>
                    Examples of personal projects
                </h1>
                <div className={styles.itemContainer}>
                    <div className={styles.item1}>Portfolio 1</div>
                    <div className={styles.item2}>Portfolio 2</div>
                    <div className={styles.item3}>Portfolio 3</div>
                </div>
            </div>
        </>
    );
}
