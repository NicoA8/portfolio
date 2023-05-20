// STYLING
import styles from "./Header.module.scss";

// COMPONENTS
import LogoRed from "@/public/logo-red.svg";
import HeroLine from "@/public/lines/hero-line.svg";
import ScrollDown from "../ScrollDown/ScrollDown";

export default function Header() {
    return (
        <header className={styles.header}>
            <LogoRed
                className={styles.logo}
                shapeRendering="geometricPrecision"
            />
            <HeroLine
                className={styles.line}
                shapeRendering="geometricPrecision"
            />
            <h1 className={styles.title}>
                <span className={styles.title_one} title="Nicoleta">
                    Nicoleta
                </span>
                <span className={styles.divider}></span>
                <span className={styles.title_two} title="Astancăi">
                    Astancăi
                </span>
            </h1>
            <ScrollDown />
        </header>
    );
}
