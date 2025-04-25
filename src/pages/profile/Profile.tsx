import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Card from "../../components/card/Card";
import classes from "./Profile.module.css";

function Profile () {

    return (
        <>
            <Header />
            <Container>
                <div className={classes.profileInfo}>
                    <img src="src\images\placeholder-img.jpg" className={classes.profileImage}></img>
                    <div className={classes.profileText}>
                        <h3>Name</h3>
                        <p>3 Year Member • 39 trips</p>
                        <p>4.9</p>
                    </div>
                </div>
                <h1>Available for Rent</h1>
                <div className={classes.buttons}>
                    <button className={classes.filter_buttons}>Filter</button>
                    <button className={classes.filter_buttons}>Filter</button>
                    <button className={classes.filter_buttons}>Filter</button>
                </div>
                <Card name="2022 Nissan Versa" pricePerDay={40.0} distance={3.2} rating={4.9} />
            </Container>
        </>
    )
}

export default Profile;