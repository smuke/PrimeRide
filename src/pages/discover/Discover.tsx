import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Card from "../../components/Card/Card";
import classes from "./Discover.module.css";

function Discover() {
    return (
        <>
            <Header />

            <section className={classes.section}>
                <Container>
                    <input className={classes.search_bar} placeholder="Enter a Location"/>
                </Container>
            </section>

            <section className={classes.section}>
                <Container>
                    <div className={classes.center_part}>
                        <h1>Cars available near you</h1>
                        <div className={classes.buttons}>
                            <button className={classes.filter_buttons}>Filter</button>
                            <button className={classes.filter_buttons}>Sort by</button>
                        </div>
                    </div>
                    <div className={classes.car_list}>
                        <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
                        <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
                        <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
                        <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Discover;