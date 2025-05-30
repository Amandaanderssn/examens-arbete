import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DrinksApiResponse } from '../../../Api/dbApi/types';
import { Box } from '@mui/material';

interface ItemCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const ItemCard = (props: ItemCardProps): React.JSX.Element => {
  const { data } = props


  return (
    <Box sx={{ display: "flex", justifyContent: "left", flexWrap: 'wrap', margin: 'auto' }}>
      {data.map((item: DrinksApiResponse) =>
        <Card sx={{ maxWidth: 400, backgroundColor: '#7A9980', marginLeft: '2.5rem', marginRight: '1.7rem', marginBottom: '2.5rem', borderRadius: '1rem' }} key={item.restaurant}>
          <CardMedia
            component="img"
            height="300"
            width={'95%'}
            image={item.image}
            alt="image"
            sx={{ '&.MuiCardMedia-root': { width: '95%', borderRadius: '1rem' }, padding: '0.5rem' }}
          />
          <CardContent sx={{ paddingBottom: '0' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand', fontWeight: 700 }}>
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
              {item.price} SEK
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
              {item.restaurant}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
              {item.description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
              Location: {item.location}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" sx={{ marginLeft: 'auto' }}>
              <FavoriteIcon />
              <Typography sx={{ marginLeft: '0.3rem' }} >{item.likes}</Typography>
            </IconButton>
            {/* <IconButton aria-label="share">
     <ShareIcon />
   </IconButton> */}
            {/* <ExpandMore
     expand={expanded}
     onClick={handleExpandClick}
     aria-expanded={expanded}
     aria-label="show more"
   >
     <ExpandMoreIcon />
   </ExpandMore> */}
          </CardActions>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
   <CardContent>
     <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
     <Typography sx={{ marginBottom: 2 }}>
       Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
       aside for 10 minutes.
     </Typography>
     <Typography sx={{ marginBottom: 2 }}>
       Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
       medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
       occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
       large plate and set aside, leaving chicken and chorizo in the pan. Add
       pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
       stirring often until thickened and fragrant, about 10 minutes. Add
       saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
     </Typography>
     <Typography sx={{ marginBottom: 2 }}>
       Add rice and stir very gently to distribute. Top with artichokes and
       peppers, and cook without stirring, until most of the liquid is absorbed,
       15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
       mussels, tucking them down into the rice, and cook again without
       stirring, until mussels have opened and rice is just tender, 5 to 7
       minutes more. (Discard any mussels that don&apos;t open.)
     </Typography>
     <Typography>
       Set aside off of the heat to let rest for 10 minutes, and then serve.
     </Typography>
   </CardContent> */}
          {/* </Collapse> */}
        </Card>
      )}

    </Box>
  );
}

export default ItemCard;