"use client";
import { useInView } from "react-intersection-observer";

// STYLING
import styles from "./About.module.scss";

// COMPONENTS
import Intro from "../Intro/Intro";
import Info from "../Info/Info";

import AboutLine from "@/public/lines/about-line.svg";
import AboutLine2 from "@/public/lines/about-line-2.svg";

export default function About() {
    // EFFECTS ON SCROLL
    const { ref: lineARef, inView: lineVisible } = useInView({
        triggerOnce: true,
    });

    const { ref: lineA2Ref, inView: lineA2Visible } = useInView({
        triggerOnce: true,
    });

    return (
        <section id="about" className={styles.about}>
            <Intro />
            <Info />

            <span
                ref={lineARef}
                className={`${styles.line}  
                ${lineVisible && styles.appear}`}
            >
                <AboutLine shapeRendering="geometricPrecision" />
            </span>
            <span
                ref={lineA2Ref}
                className={`${styles.line} ${styles.line_2} 
                ${lineA2Visible && styles.appear}`}
            >
                <AboutLine2 shapeRendering="geometricPrecision" />
            </span>
        </section>
    );
}
