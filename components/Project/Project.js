import { useInView } from "react-intersection-observer";

// STYLING
import styles from "./Project.module.scss";

// COMPONENTS
import Github from "@/public/github.svg";

export default function Project(props) {
    const {
        isFlip = false,
        title,
        website,
        github,
        excerpt,
        logo,
        role,
    } = props;

    // EFFECTS ON SCROLL
    const { ref: projectRef, inView: projectIsVisible } = useInView({
        triggerOnce: true,
    });

    return (
        <article
            ref={projectRef}
            className={`
                ${isFlip && styles.flip} 
                ${styles.project_box}
                ${projectIsVisible && styles.appear}
            `}
        >
            <a href={website} className={styles.project_tile} target="_blank">
                <img
                    className={styles.project_img}
                    src={`/projects/logo-${logo}.png`}
                />
                <img
                    className={`${styles.project_img} ${styles.color}`}
                    src={`/projects/logo-${logo}-color.png`}
                />
            </a>
            <div className={styles.text_box}>
                <div className={styles.title_box}>
                    <h3 className={styles.title}>{title}</h3>
                    {github && (
                        <a
                            href={github}
                            className={styles.github}
                            target="_blank"
                        >
                            <Github />
                        </a>
                    )}
                </div>
                <p className={styles.description + " text"}>{excerpt}</p>
                <p className={styles.role}>{role}</p>
            </div>
        </article>
    );
}
