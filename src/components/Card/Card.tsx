import styles from "./Card.module.css";

type CardProps = {
    name: string,
    note?: string,
    pricePerDay: number,
    distance: number,
    rating: number
    image: string
}

function Card(props: CardProps) {
    const handleCheckout = () => {
        alert("The car rental has been bought")
    }

    return (
        <>
            <div className={styles.car} onClick={handleCheckout}>
                <img src={props.image} className={styles.car_img}></img>
                <div className={styles.car_details}>
                    <h3 className={styles.car_title}>{props.name}</h3>
                    <p>{props.note}</p>
                    <div>
                        <p>
                            <span className={styles.car_price}>
                                ${props.pricePerDay}/day
                            </span>
                            {" "} • {props.distance} mi away
                        </p>
                        <p className={styles.car_rating}>{props.rating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;