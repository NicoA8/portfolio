import { useInView } from "react-intersection-observer";

// STYLING
import styles from "./Intro.module.scss";

// COMPONENTS
import And from "@/public/and.svg";

export default function Intro() {
    // EFFECTS ON SCROLL
    const { ref: introRef, inView: introIsVisible } = useInView({
        triggerOnce: true,
    });

    return (
        <article ref={introRef} className={styles.intro}>
            <figure
                className={`
                    ${styles.img_box} 
                    ${introIsVisible && styles.appear}
                `}
            >
                <img
                    className={styles.img}
                    src="/photo.jpg"
                    alt="Astancăi Nicoleta Alexandra"
                />
            </figure>
            <div
                className={`${styles.title} ${introIsVisible && styles.appear}`}
            >
                <span>Front End</span>
                <span>Developer</span>
                <And className={styles.and_intro + " and"} />
                <span>
                    <span className={styles.hidden}>Web </span>designer
                </span>
            </div>
        </article>
    );
}
