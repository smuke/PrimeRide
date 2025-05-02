import { PropsWithChildren } from "react";
import styles from "./Container.module.css";

function Container(props: PropsWithChildren) {
    return (
        <div className={styles.container}>
            <div className={styles.layoutContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default Container;