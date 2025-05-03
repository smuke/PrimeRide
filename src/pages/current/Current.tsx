import styles from "./Current.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import users from "../../data/users.json";
import vehicles from "../../data/vehicles.json";
import CardGrid from "../../components/CardGrid/CardGrid";
import locations from "../../data/locations.json"

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
                <div className={styles.title}>
                    <h1>Rental History</h1>
                </div>
                {user.rentals?.map((rental, index) => {
                    const vehicle = vehicles.find(vehicle => vehicle.vehicle_id == rental.vehicle_id);

                    if (!vehicle) return <p>No vehicles found.</p>

                    const location = locations.find(location => location.id == vehicle.location);
                    const owner = users.find(user => user.id === vehicle.owner_id);

                    return (
                        <CardGrid>
                            <Card
                                key={index}
                                id={vehicle.vehicle_id}
                                name={`${vehicle.car_year} ${vehicle.car_title}`}
                                note={`Rented ${rental.rent_date}`}
                                pricePerDay={vehicle.cost_per_day}
                                city={location?.city}
                                rating={owner?.rating}
                                image={vehicle.images[0]}
                            />
                        </CardGrid>
                    )
                })}
            </Container>
        </div>
    )
}

export default Current;