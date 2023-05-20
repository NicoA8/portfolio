import { useInView } from "react-intersection-observer";

// STYLING
import styles from "./Skill.module.scss";

// COMPONENTS

export default function Skill(props) {
    // EFFECTS ON SCROLL
    const { ref: skillRef, inView: skillIsVisible } = useInView({
        triggerOnce: true,
    });

    return (
        <p
            className={`${styles.skill} 
                    ${skillIsVisible && styles.appear}`}
            ref={skillRef}
        >
            {props.title}
        </p>
    );
}
