import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import StarIcon from "../StarIcon/StarIcon";

type CardProps = {
    id: number,
    name: string,
    note?: string,
    pricePerDay: number,
    city: string | undefined,
    rating: number
    image: string
}

function Card(props: CardProps) {
    return (
        <Link to={`/vehicle/${props.id}`} style={{textDecoration: "none", color: "black"}}>
            <div className={styles.car}>
                <div className={styles.car_img} style={{backgroundImage: `url(${props.image})`}}></div>
                <div className={styles.car_details}>
                    <h3 className={styles.car_title}>{props.name}</h3>
                    <p>{props.note}</p>
                    <div>
                        <p>
                            <span className={styles.car_price}>
                                ${props.pricePerDay}/day
                            </span>
                            {" "} • {props.city}
                        </p>
                        <div className={styles.car_rating}>
                            <StarIcon />
                            <p>{props.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;