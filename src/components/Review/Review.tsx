import Rating from "../Rating/Rating";
import StarIcon from "../StarIcon/StarIcon";
import styles from "./Review.module.css";

type ReviewProps = {
    name: string,
    rating: number,
    message: string,
    date: string
};

function Review(props: ReviewProps) {
    const stars = Math.ceil(props.rating);
    const emptyStars = 5 - stars;

    return (
        <div className={styles.review}>
            <p>{props.name}</p>
            <div className={styles.rating} aria-label={`${stars} out of 5 stars`}>
                {Array.from({length: stars}).map(() => <StarIcon empty={false} />)}
                {Array.from({length: emptyStars}).map(() => <StarIcon empty={true} />)}
            </div>
            <p>{props.message}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default Review;