import { useInView } from "react-intersection-observer";

// STYLING
import styles from "../Info/Info.module.scss";

// COMPONENTS
import And from "@/public/and.svg";

export default function InfoDetails(props) {
    const { section } = props;

    // EFFECTS ON SCROLL
    const { ref: detailsRef, inView: detailsVisible } = useInView({
        triggerOnce: true,
    });

    return (
        <div
            ref={detailsRef}
            className={`${styles.info_box} ${styles[section.type]} ${
                detailsVisible && styles.appear
            }`}
        >
            <h3 className={`${styles.title} ${styles[section.type]}`}>
                <span>{section.title_a}</span>
                <span>{section.title_b}</span>
                {section.and && <And className={(styles.and_info, "and")} />}
                {section.title_c && <span>{section.title_c}</span>}
            </h3>
            <p className={styles.description + " text"}>
                {section.description}
            </p>
        </div>
    );
}
