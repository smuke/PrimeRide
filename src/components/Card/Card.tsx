import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import StarIcon from "../StarIcon/StarIcon";
import Rating from "../Rating/Rating";

type CardProps = {
    id: number,
    name: string,
    note?: string,
    pricePerDay: number,
    city: string | undefined,
    rating: number | undefined,
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
                        <Rating rating={props.rating} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;