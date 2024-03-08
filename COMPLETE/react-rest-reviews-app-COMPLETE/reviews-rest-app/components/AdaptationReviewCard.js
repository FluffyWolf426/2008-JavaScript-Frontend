import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import { deleteReview } from '../utils/api/reviews';

export default function AdaptationReviewCard(
  {id, rating, title, comment, reviews, setReviews}
) {
  
  const removeReview = async () => {
    // make an api call to the backend to delete, need id.
    const response = await deleteReview(id) 
    // update the frontend, need reviews, setReviews
    const tempReviews = [...reviews].filter((review)=> {
      return review.id !== id
    })
    setReviews(tempReviews)
  }
  
  return <Card
    sx={{marginTop: '10px'}}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {rating}
        </Avatar>
      }
      action={
        <IconButton onClick={removeReview}>
          <DeleteIcon />
        </IconButton>
      }
      title={
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      }
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {comment}
      </Typography>
    </CardContent>
  </Card>
}