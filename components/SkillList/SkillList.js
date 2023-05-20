import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// STYLING
import styles from "./SkillList.module.scss";

// COMPONENTS
import Skill from "../Skill/Skill";
import Arrow from "@/public/arrow.svg";

export default function SkillList(props) {
    // EFFECTS ON SCROLL
    const { ref: listRef, inView: listIsVisible } = useInView({
        triggerOnce: true,
    });

    const scrollRef = useRef();

    // WINDOW WIDTH
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    });

    // SCROLL ON MOUSE CLICK
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState("");
    const [scroll, setScroll] = useState("");

    const handleMouseDown = (event) => {
        setIsDown(true);
        const position = event.pageX - scrollRef.current.offsetLeft;
        setStartX(position);
        setScroll(scrollRef.current.scrollLeft);
    };
    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseMove = (event) => {
        if (!isDown) return;
        event.preventDefault();
        const positionX = event.pageX - scrollRef.current.offsetLeft;
        const move = positionX - startX;
        scrollRef.current.scrollLeft = scroll - move;
    };

    // ARROW CONTROLS
    const back = () => {
        scrollRef.current.scrollBy({
            left: -(width / 2),
            behavior: "smooth",
        });
    };

    const next = () => {
        scrollRef.current.scrollBy({
            left: width / 2,
            behavior: "smooth",
        });
    };

    return (
        <div
            ref={listRef}
            className={`${styles.list_box} 
            ${listIsVisible && styles.appear}`}
        >
            <div
                ref={scrollRef}
                className={styles.list}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseMove={handleMouseMove}
                style={{ "--column-count": props.skillList.length }}
            >
                {props.skillList.map((skill) => (
                    <Skill key={skill} title={skill} />
                ))}
            </div>
            {scrollRef.current?.scrollWidth > width && (
                <nav className={styles.nav}>
                    <button onClick={back} className={styles.scroll}>
                        <Arrow className={styles.scroll_back} />
                    </button>
                    <button onClick={next} className={styles.scroll}>
                        <Arrow className={styles.scroll_next} />
                    </button>
                </nav>
            )}
        </div>
    );
}
