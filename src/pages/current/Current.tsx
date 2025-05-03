import styles from "./Current.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import users from "../../data/users.json";
import vehicles from "../../data/vehicles.json";

function Current() {
    const {userId} = useContext(UserContext);
    const user = users.find(user => user.id === userId);

    if (!user) return <p>User not found</p>

    const joinYear = new Date(user.join_date).getFullYear()
    const userRentals = user.rentals;

    return (
        <div className={styles.current}>
            <Header />
            <Container>
                <h1>Rental History</h1>
                {user.rentals?.map((rental, index) => {
                    let vehicle = vehicles.find(vehicle => vehicle.vehicle_id == rental.vehicle_id);

                    if (!vehicle) return <p>No vehicles found.</p>

                    return (
                    <Card
                        key={index}
                        name={`${vehicle.car_year} ${vehicle.car_title}`}
                        pricePerDay={vehicle.cost_per_day}
                        distance={3.2}
                        note={"Rented " + rental.rent_date}
                        rating={4.9}
                        image={vehicle.images[0]}
                    />)
                })}
            </Container>
        </div>
    )
}

export default Current;