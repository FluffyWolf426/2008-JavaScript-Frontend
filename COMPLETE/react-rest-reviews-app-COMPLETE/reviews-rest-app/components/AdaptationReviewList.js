import AdaptationReviewCard from '../components/AdaptationReviewCard';

export default function AdaptationReviewList({reviews, setReviews}) {
  return <>
    {reviews.map((adaptation, index)=> {
      return <AdaptationReviewCard
        key={index}
        reviews={reviews}
        setReviews={setReviews}
        id={adaptation.id}
        rating={adaptation.rating}
        title={adaptation.title}
        comment={adaptation.comment}
      />
    })}
  </>
}