import Header from "../../components/header/Header";
import classes from "./Discover.module.css";

function Discover() {
    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Instrument Sans' rel='stylesheet'>
        </link>
            <h1>Cars near</h1>
            <div className={classes.buttons}>
                <button className={classes.filter_buttons}>Filter</button>
                <button className={classes.filter_buttons}>Filter</button>
                <button className={classes.filter_buttons}>Sort by</button>
            </div>

            <div className={classes.car_list}>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>$40/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>$40/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>$40/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
                <div className={classes.car}>
                    <img src="src\images\2022-nissan-versa.jpg" className={classes.car_img}></img>
                    <h3 className={classes.car_title}>2022 Nissan Versa</h3>
                    <p className={classes.car_price}>$40/day</p>
                    <p className={classes.car_distance}>• 3.2 mi away</p>
                    <p className={classes.car_rating}>4.9</p>
                </div>
            </div>
        </>
    )
}

export default Discover;