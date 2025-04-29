import classes from "./Current.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";

function Current() {
    return (
        <>
            <Header />
            <Container>
                <h1>Current Rentals</h1>
                <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
                <h1>Past Rentals</h1>
                <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
            </Container>
        </>
    )
}

export default Current;