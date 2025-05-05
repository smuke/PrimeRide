import Rating from "../Rating/Rating";
import StarIcon from "../StarIcon/StarIcon";
import styles from "./ProfileCard.module.css"

function ProfileCard(props: any) {
    return (
        <div className={styles.profileCard}>
            <img src={props.image} className={styles.profileImage}></img>
            <div className={styles.profileText}>
                <h3>{props.name}</h3>
                <p>Joined {props.joinYear} • {props.tripCount} trips</p>
                <Rating rating={props.rating} />
            </div>
        </div>
    )
}

export default ProfileCard;