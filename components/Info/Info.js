// STYLING
import styles from "./Info.module.scss";

// DATA
import { info } from "@/utils/info";

// COMPONENTS
import SkillList from "../SkillList/SkillList";
import InfoDetails from "../InfoDetails/InfoDetails";

export default function Info() {
    return (
        <>
            {info.map((section) => (
                <div className={styles.info} key={section.type}>
                    <InfoDetails section={section} />
                    <SkillList skillList={section.list} />
                </div>
            ))}
        </>
    );
}
