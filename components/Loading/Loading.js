// STYLING
import styles from "./Loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.box}>
            <span className={styles.loader} />
        </div>
    );
}
