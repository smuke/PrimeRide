import { PropsWithChildren } from "react";
import styles from "./CardGrid.module.css";

function CardGrid(props: PropsWithChildren) {
    return (
        <div className={styles.cardGrid}>
            {props.children}
        </div>
    )
}

export default CardGrid;