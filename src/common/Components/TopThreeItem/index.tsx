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

const TopThree = (props: ItemCardProps): React.JSX.Element => {
    const { data } = props

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mostLiked = Math.max(...data.map((item: any) => item.likes));
    console.log(mostLiked)

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {data.map((item: DrinksApiResponse, index: number) =>
                <Box key={index}>
                    {mostLiked === item.likes ?
                        <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box
                                    sx={{ position: 'relative', top: '1.5rem', left: '0.7rem', width: '3rem', height: '3rem', backgroundColor: '#eaafde', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}
                                ><Typography sx={{}}>#{index + 1}</Typography>
                                </Box>
                                <Card sx={{ minWidth: 500, maxWidth: 700, backgroundColor: '#7A9980', marginLeft: '1.7rem', marginRight: '1.7rem', marginBottom: '1rem', borderRadius: '1rem', display: 'flex' }} key={item.restaurant}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            width={'95%'}
                                            image={item.image}
                                            alt="image"
                                            sx={{ '&.MuiCardMedia-root': { width: '90%', borderRadius: '1rem' }, padding: '0.5rem' }}
                                        />
                                        <CardContent sx={{ '&.MuiCardContent-root': { width: '80%' }, marginLeft: '4rem' }}>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand', fontWeight: 700 }}>
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
                                                {item.price} SEK
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
                                                {item.restaurant}
                                            </Typography>
                                            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description}
                                            </Typography> */}
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
                                                Location: {item.location}
                                            </Typography>
                                            <CardActions disableSpacing sx={{ padding: '0' }}>
                                                <IconButton aria-label="add to favorites" size='small' sx={{ padding: '0' }}>
                                                    <FavoriteIcon /> {item.likes}
                                                </IconButton>
                                            </CardActions>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Box>
                        </Box>
                        :
                        <>
                            <Box
                                sx={{ position: 'relative', top: '1.5rem', left: '0.7rem', width: '3rem', height: '3rem', backgroundColor: '#eaafde', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}
                            ><Typography sx={{}}>#{index + 1}</Typography>
                            </Box>
                            <Card sx={{ minWidth: 500, maxWidth: 700, backgroundColor: '#7A9980', marginLeft: '1.7rem', marginRight: '1.7rem', marginBottom: '1rem', borderRadius: '1rem', display: 'flex' }} key={item.restaurant}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        width={'95%'}
                                        image={item.image}
                                        alt="image"
                                        sx={{ '&.MuiCardMedia-root': { width: '90%', borderRadius: '1rem' }, padding: '0.5rem' }}
                                    />
                                    <CardContent sx={{ width: '60%', marginLeft: '4rem' }}>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand', fontWeight: 700 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
                                            {item.price} SEK
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
                                            {item.restaurant}
                                        </Typography>
                                        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description}
                                        </Typography> */}
                                        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Quicksand' }}>
                                            Location: {item.location}
                                        </Typography>
                                        <CardActions disableSpacing sx={{ padding: '0' }}>
                                            <IconButton aria-label="add to favorites" size='small' sx={{ padding: '0' }}>
                                                <FavoriteIcon /> {item.likes}
                                            </IconButton>
                                        </CardActions>
                                    </CardContent>
                                </Box>
                            </Card>
                        </>
                    }
                </Box>
            )
            }

        </Box >
    );
}

export default TopThree;