import "./review.scss"
import ReviewSlider from "./reviewSlider";

const Review = () => {
    return ( 
        <section className="review">
            <div className="container">
                <h2 className="review-title title">ОТЗЫВЫ КЛИЕНТОВ</h2>
                <div className="review-slider">
                    <ReviewSlider/>
                </div>
            </div>
        </section>
     );
}
 
export default Review;