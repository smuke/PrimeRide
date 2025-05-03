import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Card from "../../components/Card/Card";
import styles from "./Discover.module.css";
import LocationInput from "../../components/LocationInput/LocationInput";
import vehicles from "../../data/vehicles.json";
import { useState } from "react";

function Discover() {
    const [location, setLocation] = useState("you");

    return (
        <>
            <Header />

            <section className={styles.section}>
                <Container>
                    {/* <input className={styles.search_bar} placeholder="Enter a Location"/> */}
                    <LocationInput updateLocation={setLocation} />
                </Container>
            </section>

            <section className={styles.section}>
                <Container>
                    <div className={styles.center_part}>
                        <h1>Cars available near {location}</h1>
                        <div className={styles.buttons}>
                            <button className={styles.filter_buttons}>Filter</button>
                            <button className={styles.filter_buttons}>Sort by</button>
                        </div>
                    </div>
                    <div className={styles.car_list}>
                        {vehicles?.map((vehicle, index) => (
                            <Card
                                key={index}
                                name={vehicle.car_title}
                                pricePerDay={vehicle.cost_per_day}
                                distance={3.2}
                                rating={4.9}
                                image={vehicle.images[0]}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Discover;