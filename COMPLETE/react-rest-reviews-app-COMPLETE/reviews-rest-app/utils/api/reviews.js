const BASE_URL = `http://localhost:5000`

const getReviews = async () => {
    // fetch from the backend end.
    const response = await fetch(`${BASE_URL}/reviews`)
    // parse the response
    const reviewData = await response.json()
    // return it from the function.
    return reviewData
}

const postReview = async ({title, comments, rating}) => {
  // make the fetch request to the backend.
  const response = await fetch(`${BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      comment: comments,
      rating: parseInt(rating)
    })
  })

  // parse the data
  const newPostData = await response.json()
  
  // return the data
  return newPostData
}

const deleteReview = async (id) => {
    // fetch from the backend end.
    const response = await fetch(`${BASE_URL}/reviews/${id}`,{
      method: "DELETE"
    })
    // parse the response
    const reviewData = await response.json()
    // return it from the function.
    return reviewData
}

export { getReviews, postReview, deleteReview }
