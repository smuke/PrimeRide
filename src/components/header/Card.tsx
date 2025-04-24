import classes from "./Card.module.css";


function Card (props) {
    return (
        <>
            <div className={classes.car_list}>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>${props.pricePerDay}/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>${props.pricePerDay}/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>${props.pricePerDay}/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>${props.pricePerDay}/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>${props.pricePerDay}/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
            </div>
        </>
    )
}

export default Card;