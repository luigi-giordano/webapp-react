
function ReviewCard({ review }) {
  const { name, vote, text } = review

  return (
    <div className="card mb-3">
      <div className="card-body mb-3">
        <address className="card-name"><i>By {name}</i></address>
        <p className="card-vote">{vote}</p>
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

export default ReviewCard
