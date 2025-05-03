import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import styles from "./Vehicle.module.css";
import { useParams } from "react-router";
import vehicles from "../../data/vehicles.json";
import locations from "../../data/locations.json"
import StarIcon from "../../components/StarIcon/StarIcon";

function Vehicle() {
    const { vehicleId } = useParams();
    const vehicle = vehicleId && vehicles.find(vehicle => vehicle.vehicle_id == parseInt(vehicleId));

    if (!vehicle) return <p>Vehicle not found.</p>;
    const location = locations.find(location => location.id == vehicle.location);

    return (
        <>
            <Header />
            <Container>
                <div className={styles.image} style={{backgroundImage: `url(${vehicle.images[0]})`}}></div>
            </Container>
            <section className={styles.vehicleInfo}>
                <Container>
                    <div className={styles.container}>
                        <div>
                            <h1>{vehicle.car_year} {vehicle.car_title}</h1>
                            <p>{vehicle.vehicle_type} • {vehicle.fuel_type}</p>
                            <p>{location?.city}, {location?.state}</p>
                            <div className={styles.vehicleRating}>
                                <StarIcon />
                                <p>4.9</p>
                            </div>
                        </div>
                        <div className={styles.reserve}>
                            <button className={styles.reserveButton}>Reserve Vehicle</button>
                            <h1>${vehicle.cost_per_day}/day</h1>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Vehicle;