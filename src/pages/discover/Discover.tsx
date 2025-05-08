import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import styles from "./Discover.module.css";
import LocationInput from "../../components/LocationInput/LocationInput";
import vehicles from "../../data/vehicles.json";
import { useState } from "react";
import locations from "../../data/locations.json"
import CardGrid from "../../components/CardGrid/CardGrid";
import users from "../../data/users.json"

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
                        {/* <div className={styles.buttons}>
                            <button className={styles.filter_buttons}>Filter</button>
                            <button className={styles.filter_buttons}>Sort by</button>
                        </div> */}
                    </div>
                    <CardGrid>
                        {(vehiclesFilter.length > 0) ? vehiclesFilter.map((vehicle, index) => {
                            const owner = users.find(user => user.id === vehicle.owner_id);

                            return <Card
                                key={index}
                                id={vehicle.vehicle_id}
                                name={`${vehicle.car_year} ${vehicle.car_title}`}
                                note={`${vehicle.vehicle_type} • ${vehicle.fuel_type}`}
                                pricePerDay={vehicle.cost_per_day}
                                city={location?.city}
                                rating={owner?.rating}
                                image={vehicle.images[0]}
                            />
                        }) : <p>No vehicles found. Please try another location.</p>}
                    </CardGrid>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default Discover;