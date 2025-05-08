import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import styles from "./Profile.module.css";
import users from "../../data/users.json";
import vehicles from "../../data/vehicles.json";
import { useParams } from "react-router";
import CardGrid from "../../components/CardGrid/CardGrid";
import locations from "../../data/locations.json"
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Footer from "../../components/Footer/Footer";

function Profile() {
    const { userId } = useParams();
    const user = userId && users.find(user => user.id === parseInt(userId));

    if (!user) return <p>User not found</p>

    const joinYear = new Date(user.join_date).getFullYear()
    const userVehicles = vehicles.filter(vehicle => vehicle.owner_id === parseInt(userId) && vehicle.active);

    return (
        <>
            <Header />
            <Container>
                <ProfileCard
                    id={user.id}
                    name={user.name}
                    image={user.image}
                    joinYear={`${joinYear}`}
                    tripCount={user.trip_count}
                    rating={user.rating}
                />
                <div className={styles.title}>
                    <h1>Available for Rent</h1>
                </div>
                {/* <div className={styles.buttons}>
                    <button className={styles.filter_buttons}>Filter</button>
                    <button className={styles.filter_buttons}>Filter</button>
                    <button className={styles.filter_buttons}>Filter</button>
                </div> */}
                <CardGrid>
                    {userVehicles?.map((vehicle, index) => {
                        const location = locations.find(location => location.id == vehicle.location);

                        return <Card
                            key={index}
                            id={vehicle.vehicle_id}
                            name={`${vehicle.car_year} ${vehicle.car_title}`}
                            note={`${vehicle.vehicle_type} • ${vehicle.fuel_type}`}
                            pricePerDay={vehicle.cost_per_day}
                            city={location?.city}
                            rating={user.rating}
                            image={vehicle.images[0]}
                        />;
                    })}
                </CardGrid>
            </Container>
            <Footer />
        </>
    )
}

export default Profile;