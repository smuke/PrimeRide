import { useNavigate } from "react-router";
import Rating from "../Rating/Rating";
import StarIcon from "../StarIcon/StarIcon";
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
            className={styles.profileCard}
            onClick={props.redirect ? handleClick : undefined}
            style={props.redirect ? { cursor: "pointer" } : undefined}
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
