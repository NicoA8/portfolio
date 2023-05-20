"use client";
import { useState, useEffect } from "react";

// STYLING
import styles from "./Navbar.module.scss";

// DATA
import { navLinks } from "@/utils/menu";

// COMPONENTS
import LogoWhiteBold from "@/public/logo-white-bold.svg";
import LogoWhiteRegular from "@/public/logo-white-regular.svg";

export default function Navbar() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
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

    useEffect(() => {
        if (active) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
    }, [active]);
    return (
        <nav
            className={`${styles.navbar} ${active && styles.active} 
            ${scrolled ? styles.scrolled : ""}`}
        >
            <span className={`${styles.logo_box} ${active && styles.active}`}>
                {active ? (
                    <LogoWhiteRegular
                        className={`${styles.logo} ${styles.regular}`}
                        shapeRendering="geometricPrecision"
                    />
                ) : (
                    <LogoWhiteBold
                        className={`${styles.logo} ${styles.bold}`}
                        shapeRendering="geometricPrecision"
                    />
                )}
            </span>
            <button
                className={`${styles.hamburger} ${active && styles.active}`}
                onClick={toggleMenu}
            >
                <span className={styles.middle}></span>
            </button>
            <div className={`${styles.menu} ${active && styles.active}`}>
                {navLinks.map((link) => (
                    <a
                        href={link.path}
                        key={link.name}
                        className={styles.link}
                        onClick={() => setActive(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
