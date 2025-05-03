import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import styles from "./Vehicle.module.css";
import { useParams } from "react-router";
import vehicles from "../../data/vehicles.json";
import locations from "../../data/locations.json"
import StarIcon from "../../components/StarIcon/StarIcon";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import users from "../../data/users.json";
import Footer from "../../components/footer/Footer";

function Vehicle() {
    const { vehicleId } = useParams();
    const vehicle = vehicleId && vehicles.find(vehicle => vehicle.vehicle_id == parseInt(vehicleId));

    if (!vehicle) return <p>Vehicle not found.</p>;
    const location = locations.find(location => location.id == vehicle.location);

    const user = users.find(user => user.id === vehicle.owner_id);
    const joinYear = user && new Date(user.join_date).getFullYear()

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
                        </div>
                        <div className={styles.reserve}>
                            <button className={styles.reserveButton}>Reserve Vehicle</button>
                            <h1>${vehicle.cost_per_day}/day</h1>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={styles.profileCard}>
                <Container>
                    <ProfileCard
                            name={user?.name}
                            image={user?.image}
                            joinYear={joinYear}
                            tripCount={user?.trip_count}
                            rating={user?.rating}
                    />
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Vehicle;