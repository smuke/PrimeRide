import classes from "./Card.module.css";

type CardProps = {
    name: string,
    pricePerDay: number,
    distance: number,
    rating: number
}

function Card(props: CardProps) {
    const handleCheckout = () => {
        alert("The car rental has been bought")
    }

    return (
        <>
                <div className={classes.car} onClick={handleCheckout}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>{props.name}</h3>
                    <div className={classes.car_details}>
                        <p>
                            <span className={classes.car_price}>
                                ${props.pricePerDay}/day
                            </span>
                             • {props.distance} mi away
                        </p>
                        <p className={classes.car_rating}>{props.rating}</p>
                    </div>
                </div>
        </>
    )
}

export default Card;