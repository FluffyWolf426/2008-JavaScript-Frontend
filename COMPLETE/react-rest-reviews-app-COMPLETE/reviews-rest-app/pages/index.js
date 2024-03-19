import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import AdaptationReviewForm from '../components/AdaptationReviewForm';
import AdaptationReviewList from '../components/AdaptationReviewList';
import AppMetaData from '../components/AppMetaData';
import NavBar from '../components/NavBar';

import { getReviews } from '../utils/api/reviews';

export default function Home() {
  // state for the application.
  const [reviews, setReviews] = useState([])

  useEffect(() =>{
loadReviews()
  }, [])

  useEffect(() =>{
    loadReviews()
      }, [reviews])
  const loadReviews = async () => {
    // fetch from the backend end.
    const reviewData = await getReviews()
    // set the reviews
    setReviews(reviewData)
  }

  return (
    <div>
      <AppMetaData />
      <NavBar />
      <main>
        <Container maxWidth="md">
          <AdaptationReviewForm 
            reviews={reviews}
            setReviews={setReviews}
          />
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={loadReviews}
            >
              Load All Current Reviews
            </Button>
          </Box>
          <AdaptationReviewList
            reviews={reviews}
            setReviews={setReviews}
          />
        </Container>
      </main>
    </div>
  )
}
