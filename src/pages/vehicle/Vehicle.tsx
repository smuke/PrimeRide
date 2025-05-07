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
import { format } from "date-fns";
import { Separator } from "react-aria-components";
import CardGrid from "../../components/CardGrid/CardGrid";
import Review from "../../components/Review/Review";
import reviews from "../../data/reviews.json";
import Line from "../../components/Line/Line";

function Vehicle() {
    const { vehicleId } = useParams();
    const vehicle = vehicleId && vehicles.find(vehicle => vehicle.vehicle_id == parseInt(vehicleId));
    if (!vehicle) return <p>Vehicle not found.</p>;

    const location = locations.find(location => location.id == vehicle.location);

    const user = users.find(user => user.id === vehicle.owner_id);
    if (!user) return <p>User not found.</p>;

    const joinYear = user && new Date(user.join_date).getFullYear();

    const userReviews = reviews.filter(review => review.user_id == user.id);

    const handleCheckout = async () => {
        const currentDate = new Date();
        const formattedDate = format(currentDate, "yyyy-MM-dd");
        const record = [...vehicleId, formattedDate];
        console.log(record);
        

        window.alert(vehicle.car_year + " " + vehicle.car_title + " Reserved")
    }

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
                            <button className={styles.reserveButton} onClick={() => handleCheckout()}>Reserve Vehicle</button>
                            <h1>${vehicle.cost_per_day}/day</h1>
                        </div>
                    </div>
                    <Line />
                    <div style={{paddingTop: "10px"}}>
                        <h1>Description</h1>
                        <p>{vehicle.description.replace("\\n", "<br>")}</p>
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
            <section className={styles.reviews}>
                <Container>
                    <h1>Reviews</h1>
                    <div className={styles.reviewContainer} aria-label={`Rating of 3.4`}>
                        {userReviews.length > 0 ? userReviews.map((review, index) => (
                            <Review key={index} name={review.name} rating={review.rating} message={review.message} date={review.date} />
                        ))
                        : <p>Be the first one to leave a review!</p>}
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Vehicle;