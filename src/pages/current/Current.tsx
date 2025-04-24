
import classes from "./Current.module.css";
import Card from "../../components/Card/Card";


function Current() {

    return(
        <>
        <h1>Current Rentals</h1>
        <Card pricePerDay={40.0}/>
        <h1>Past Rentals</h1>
        <Card pricePerDay={40.0}/>
        </>
    )
}

export default Current;