"use client";
import { useState, useEffect } from "react";

// STYLING
import styles from "./ScrollDown.module.scss";

// COMPONENTS
import ScrollIcon from "@/public/scroll-icon.svg";

export default function ScrollDown() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollDown}
            className={`${styles.scroll_down} ${scrolled && styles.scrolled}`}
        >
            <ScrollIcon
                shapeRendering="geometricPrecision"
                className={styles.scroll_svg}
            />
        </button>
    );
}
