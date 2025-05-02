import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import styles from "./Profile.module.css";
import UserContext from "../../context/UserContext";
import users from "../../data/users.json";
import vehicles from "../../data/vehicles.json";
import { useContext } from "react";

function Profile() {
    const userId = useContext(UserContext);
    const user = users.find(user => user.id === userId);

    if (!user) return <p>User not found</p>

    const joinYear = new Date(user.join_date).getFullYear()
    const userVehicles = vehicles.filter(vehicle => vehicle.vehicle_id === userId && vehicle.active);

    return (
        <>
            <Header />
            <Container>
                <div className={styles.profileInfo}>
                    <img src={user.image} className={styles.profileImage}></img>
                    <div className={styles.profileText}>
                        <h3>{user.name}</h3>
                        <p>Joined {joinYear} • {user.trip_count} trips</p>
                        <p>{user.rating}</p>
                    </div>
                </div>
                <h1>Available for Rent</h1>
                <div className={styles.buttons}>
                    <button className={styles.filter_buttons}>Filter</button>
                    <button className={styles.filter_buttons}>Filter</button>
                    <button className={styles.filter_buttons}>Filter</button>
                </div>
                {userVehicles?.map((vehicle) => (
                    <Card
                        name={vehicle.car_title}
                        pricePerDay={vehicle.cost_per_day}
                        distance={3.2}
                        rating={user.rating}
                        image={vehicle.images[0]}
                    />
                ))}
            </Container>
        </>
    )
}

export default Profile;