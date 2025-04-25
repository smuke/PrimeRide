import classes from "./Current.module.css";
import Card from "../../components/card/Card";

function Current() {

    return(
        <>
        <h1>Current Rentals</h1>
        <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
        <h1>Past Rentals</h1>
        <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
        </>
    )
}

export default Current;