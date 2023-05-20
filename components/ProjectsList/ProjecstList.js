"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// STYLING
import styles from "./ProjectsList.module.scss";

// DATA
import { projects } from "@/utils/projects";

// COMPONENTS
import Project from "../Project/Project";
import ProjectLine from "@/public/lines/project-line.svg";
import ProjectLine2 from "@/public/lines/project-line-2.svg";

export default function Projects() {
    const NR_PROJECTS = 4;
    const ADD_PROJECTS = 2;

    const [nrOfProjects, setNoOfProjects] = useState(NR_PROJECTS);

    // EFFECTS ON SCROLL
    const { ref: titleP, inView: titlePVisible } = useInView({
        triggerOnce: true,
    });

    const { ref: linePRef, inView: linePVisible } = useInView({
        triggerOnce: true,
    });

    const { ref: lineP2Ref, inView: lineP2Visible } = useInView({
        triggerOnce: true,
    });

    // LOAD MORE OR LESS ON CLICK
    const showMore = () => {
        setNoOfProjects(nrOfProjects + ADD_PROJECTS);
    };

    const showLess = () => {
        setNoOfProjects(NR_PROJECTS);
    };

    return (
        <section id="projects" className={styles.projects}>
            <h2
                ref={titleP}
                className={`${styles.title} 
                ${titlePVisible && styles.appear}`}
            >
                Some of my work
            </h2>
            <span
                ref={linePRef}
                className={`${styles.line}  
                ${linePVisible && styles.appear}`}
            >
                <ProjectLine shapeRendering="geometricPrecision" />
            </span>
            <span
                ref={lineP2Ref}
                className={`${styles.line} ${styles.line_2} 
                ${lineP2Visible && styles.appear}`}
            >
                <ProjectLine2 shapeRendering="geometricPrecision" />
            </span>

            {projects.slice(0, nrOfProjects).map((section, index) => (
                <Project
                    key={section.title}
                    isFlip={index % 2 !== 0 && true}
                    title={section.title}
                    website={section.website}
                    github={section.github}
                    logo={section.project}
                    excerpt={section.excerpt}
                    role={section.role}
                />
            ))}

            {nrOfProjects < projects.length ? (
                <button
                    className={`${styles.button} ${styles.more} arrow_button`}
                    onClick={showMore}
                >
                    See more
                </button>
            ) : (
                <button
                    className={`${styles.button} ${styles.less} arrow_button`}
                    onClick={showLess}
                >
                    Show less
                </button>
            )}
        </section>
    );
}
