import StarIcon from "../StarIcon/StarIcon";
import styles from "./Rating.module.css";

type RatingProps = {
    rating: number | undefined
};

function Rating({ rating }: RatingProps) {
    return (
        <div className={styles.rating}>
            <StarIcon />
            <p>{rating}</p>
        </div>
    );
}

export default Rating;