import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import styles from "./Discover.module.css";
import LocationInput from "../../components/LocationInput/LocationInput";

function Discover() {
    return (
        <>
            <Header />

            <section className={styles.section}>
                <Container>
                    <input className={styles.search_bar} placeholder="Enter a Location"/>
                </Container>
            </section>

            <section className={styles.section}>
                <Container>
                    <div className={styles.center_part}>
                        <h1>Cars available near you</h1>
                        <div className={styles.buttons}>
                            <button className={styles.filter_buttons}>Filter</button>
                            <button className={styles.filter_buttons}>Sort by</button>
                        </div>
                    </div>
                    <div className={styles.car_list}>
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