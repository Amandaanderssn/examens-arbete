import { Box, Typography } from "@mui/material"
import api from "../../Api/dbApi"
import React from "react"
import { DrinksApiResponse } from "../../Api/dbApi/types"
import TopThree from "../../common/Components/TopThreeItem"
import ScrollShakeBox from "../../common/Animations/BoxAnimationTest"
import SlideUpOnScroll from "../../common/Animations/SlipeUpAnimation"

const StartPage = (): React.JSX.Element => {

    const { data: drinkData, isLoading } = api.useGetAllDrinksQuery()
    const { data: foodData } = api.useGetAllFoodQuery()

    const [topThreeDrinks, setTopThreeDrink] = React.useState<DrinksApiResponse[]>([])
    const [topThreeFood, setTopThreeFood] = React.useState<DrinksApiResponse[]>([])

    React.useEffect(() => {
        if (!drinkData) return

        // Sortera arrayen baserat på likes i fallande ordning
        const sortDrinksData = [...drinkData].sort((a, b) => b.likes - a.likes);

        // Hämta de tre första objekten (om det finns tillräckligt många)
        setTopThreeDrink(sortDrinksData.slice(0, 3));
        console.log(drinkData)
    }, [drinkData])

    React.useEffect(() => {
        if (!foodData) return

        // Sortera arrayen baserat på likes i fallande ordning
        const sortDrinksData = [...foodData].sort((a, b) => b.likes - a.likes);

        // Hämta de tre första objekten (om det finns tillräckligt många)
        setTopThreeFood(sortDrinksData.slice(0, 3));
        console.log(drinkData)
    }, [foodData])

    React.useEffect(() => {
        document.body.classList.add('startPage');

        return () => {
            document.body.classList.remove('startPage');
        };
    }, []);


    return (
        <Box>
            <SlideUpOnScroll>
                <ScrollShakeBox />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
                    <Typography sx={{ fontFamily: 'Luckiest Guy' }} variant="h2">Välkommen till DrinkedIn</Typography>
                    <Typography sx={{ fontFamily: 'Luckiest Guy' }} variant="h4">Mat & drinkar till studentpriser</Typography>
                    <Typography sx={{ fontFamily: 'Alumni Sans Pinstripe', marginTop: '2rem' }} variant="h4">Här hittar du exklusiva erbjudanden från restauranger och barer som vill göra studentlivet lite godare (och billigare).</Typography>
                    <Typography sx={{ fontFamily: 'Alumni Sans Pinstripe' }} variant="h4"> Ät och drick gott UTAN att spräcka budgeten</Typography>
                </Box>
            </SlideUpOnScroll>
            {!isLoading &&
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '12rem' }}>
                    <SlideUpOnScroll>
                        <Typography variant="h3" sx={{ paddingTop: '3.5rem', paddingBottom: "2rem", textAlign: 'center', width: '60rem', fontFamily: 'Luckiest Guy' }}>STUDENTS CURRENT FAVOURITE...</Typography>
                    </SlideUpOnScroll>
                    <SlideUpOnScroll>
                        <Typography variant="h3" className="clink" sx={{ height: '10rem', width: '10rem', paddingTop: '3.5rem', paddingBottom: "2rem", textAlign: 'center', fontFamily: 'Luckiest Guy', backgroundColor: '#eaafde', borderRadius: '50%' }}>
                            DRINKS
                        </Typography>
                    </SlideUpOnScroll>
                    <SlideUpOnScroll>
                        <TopThree data={topThreeDrinks} />
                    </SlideUpOnScroll>
                    <SlideUpOnScroll>
                        <Typography variant="h3" sx={{ paddingTop: '3.5rem', paddingBottom: "2rem", textAlign: 'center', width: '60rem', fontFamily: 'Luckiest Guy' }}>
                            FOODS
                        </Typography>
                    </SlideUpOnScroll>
                    <SlideUpOnScroll>
                        <TopThree data={topThreeFood} />
                    </SlideUpOnScroll>

                </Box>
            }

        </Box>
    )
}

export default StartPage