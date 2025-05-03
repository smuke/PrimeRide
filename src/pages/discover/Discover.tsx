import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import styles from "./Discover.module.css";
import LocationInput from "../../components/LocationInput/LocationInput";
import vehicles from "../../data/vehicles.json";
import { useState } from "react";
import locations from "../../data/locations.json"

function Discover() {
    const [locationId, setLocationId] = useState<number>(1);

    const location = locations.find(location => location.id == locationId);

    const vehiclesFilter = vehicles.filter(vehicle => vehicle.location == locationId);

    return (
        <>
            <Header />

            <section className={styles.section}>
                <Container>
                    {/* <input className={styles.search_bar} placeholder="Enter a Location"/> */}
                    <LocationInput updateLocation={setLocationId} />
                </Container>
            </section>

            <section className={styles.section}>
                <Container>
                    <div className={styles.center_part}>
                        <h1>Available in {location?.city}</h1>
                        <div className={styles.buttons}>
                            <button className={styles.filter_buttons}>Filter</button>
                            <button className={styles.filter_buttons}>Sort by</button>
                        </div>
                    </div>
                    <div className={styles.car_list}>
                        {(vehiclesFilter.length > 0) ? vehiclesFilter.map((vehicle, index) => (
                            <Card
                                key={index}
                                name={`${vehicle.car_year} ${vehicle.car_title}`}
                                note={`${vehicle.vehicle_type} • ${vehicle.fuel_type}`}
                                pricePerDay={vehicle.cost_per_day}
                                distance={3.2}
                                rating={4.9}
                                image={vehicle.images[0]}
                            />
                        )) : <p>No vehicles found. Please try another location.</p>}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Discover;