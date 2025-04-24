import Card from "../../components/Card/Card";
import classes from "./Discover.module.css";

function Discover() {
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Instrument Sans' rel='stylesheet'></link>

            <input className={classes.search_bar} placeholder="Enter a Location"/>
            <div className={classes.center_part}>
                <h1>Cars available near you</h1>
                <div className={classes.buttons}>
                    <button className={classes.filter_buttons}>Filter</button>
                    <button className={classes.filter_buttons}>Sort by</button>
                </div>
            </div>
 
            <Card name="Car name" pricePerDay={40.0} />
        </>
    )
}

export default Discover;