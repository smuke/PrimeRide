import StarIcon from "../StarIcon/StarIcon";
import styles from "./Rating.module.css";

type RatingProps = {
    rating: number | undefined
};

function Rating({ rating }: RatingProps) {
    return (
        <div className={styles.rating}>
            {(rating && rating >= 1) ? <StarIcon /> : <StarIcon empty={true} />}
            <p>{rating}</p>
        </div>
    );
}

export default Rating;