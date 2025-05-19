/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import SearchBarComponent from "../../common/Components/SearchBarComponent"
import api from "../../Api/dbApi"
import { DrinksApiResponse, FoodApiResponse } from "../../Api/dbApi/types";
import ItemCard from "../../common/Components/ItemCardComponent";
import { Typography } from "@mui/material";

const SearchPage = (): React.JSX.Element => {
    const { data: drinkData } = api.useGetAllDrinksQuery();
    const { data: foodData } = api.useGetAllFoodQuery();
    const [allData, setAllData] = React.useState<any[]>([])
    const [locations, setLocations] = React.useState<string[]>([])
    const [matchedDrinkOffer, setMatchedDrinkOffers] = React.useState<DrinksApiResponse[]>([])
    const [matchedFood, setMatchedFood] = React.useState<FoodApiResponse[]>([])

    const handleSearch = (values: string[]) => {
        console.log('values', values)
        const drinkMatches: DrinksApiResponse[] = findMatches(drinkData, values)
        const foodMatches = findMatches(foodData, values)

        setMatchedDrinkOffers(drinkMatches)
        setMatchedFood(foodMatches)

        console.log("drinks", drinkMatches)
        console.log("food", foodMatches)

    }

    const findMatches = (dataToMatch: any[] | undefined, selectedLocations: string[]): any[] => {
        if (!dataToMatch) return []
        if (selectedLocations.length === 0) return []

        return dataToMatch.filter((item) => selectedLocations.includes(item.location))
    }

    React.useEffect(() => {
        if (!drinkData || !foodData) return;

        const locations: any[] = []

        drinkData.map((drinkObj) => {
            locations.push(drinkObj)
        })
        foodData.map((foodObj) => {
            locations.push(foodObj)
        })

        setAllData(locations)
        setMatchedDrinkOffers(drinkData)
        setMatchedFood(foodData)

    }, [drinkData, foodData])

    React.useEffect(() => {
        if (!allData) return
        const uniqueLocations: string[] = []
        allData.forEach((obj) => {
            if (!uniqueLocations.includes(obj.location)) {
                uniqueLocations.push(obj.location)

            }
        })

        setLocations(uniqueLocations)

    }, [allData])

    console.log("all data state", allData)
    console.log("all locations", locations)

    return (
        <>
            <SearchBarComponent options={locations} handleSearch={handleSearch} />
            <Typography variant="h5">Drink offers</Typography>
            {matchedDrinkOffer.length > 0 ?
                <ItemCard data={matchedDrinkOffer} /> : <h1>no results</h1>}
            <Typography variant="h5">Food offers</Typography>
            {matchedFood.length > 0 ?
                <ItemCard data={matchedFood} /> : <h1>no results</h1>}
        </>
    )
}

export default SearchPage