// STYLING
import styles from "./Footer.module.scss";

// COMPONENTS
import LinkedIn from "@/public/linkedin.svg";
import GithubIcon from "@/public/github-icon.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                className={styles.icon}
                href="http://www.linkedin.com/in/nicoleta-astancai"
                target="_blank"
            >
                <LinkedIn />
            </a>
            <span>© All rights reserved. Nicoleta Astancăi 2023</span>
            <a
                className={styles.icon}
                href="https://github.com/NicoA8"
                target="_blank"
            >
                <GithubIcon />
            </a>
        </footer>
    );
}
