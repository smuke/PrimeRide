import { PropsWithChildren } from "react";
import classes from "./Container.module.css";

function Container(props: PropsWithChildren) {
    return (
        <div className={classes.container}>
            <div className={classes.layoutContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default Container;