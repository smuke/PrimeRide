import { useNavigate } from "react-router";
import Rating from "../Rating/Rating";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
    id: number;
    image: string;
    name: string;
    joinYear: string;
    tripCount: number;
    rating: number;
    redirect?: boolean;
};

function ProfileCard(props: ProfileCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profile/${props.id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div
            className={`${styles.profileCard} ${props.redirect ? styles.redirect : ""}`}
            onClick={props.redirect ? handleClick : undefined}
        >
            <img src={props.image} className={styles.profileImage}></img>
            <div className={styles.profileText}>
                <h3>{props.name}</h3>
                <p>Joined {props.joinYear} • {props.tripCount} trips</p>
                <Rating rating={props.rating} />
            </div>
        </div>
    );
}

export default ProfileCard;
