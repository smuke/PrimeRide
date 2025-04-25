import classes from "./Card.module.css";

const handleCheckout = () => {
    alert("The car rental has been bought")
}

function Card (props) {
    return (
        <>
                <div className={classes.car} onClick={handleCheckout}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>{props.name}</h3>
                    <p className={classes.car_price}>${props.pricePerDay}/day</p>
                    <p className={classes.car_distance}>• {props.distance} mi away</p>
                    <p className={classes.car_rating}>{props.rating}</p>
                </div>
        </>
    )
}

export default Card;