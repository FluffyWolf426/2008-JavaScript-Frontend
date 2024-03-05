import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function SimpleListItem({text}) {
  return <ListItem>
    <ListItemText>
      <Typography variant="p" component="div">
        {text}
      </Typography>
    </ListItemText>
  </ListItem>
}