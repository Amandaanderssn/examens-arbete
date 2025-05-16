import { Typography } from "@mui/material"
import ItemCard from "../../common/Components/ItemCardComponent"
import api from "../../Api/dbApi"
import React from "react"
import { DrinksApiResponse } from "../../Api/dbApi/types"

const StartPage = (): React.JSX.Element => {

    const { data, isLoading } = api.useGetAllDrinksQuery()
    const [topThree, setTopThree] = React.useState<DrinksApiResponse[]>([])
    React.useEffect(() => {
        if (!data) return

        // Sortera arrayen baserat på likes i fallande ordning
        const sortDrinksData = [...data].sort((a, b) => b.likes - a.likes);

        // Hämta de tre första objekten (om det finns tillräckligt många)
        setTopThree(sortDrinksData.slice(0, 3));
        console.log(data)
    }, [data])


    return (
        <>
            {!isLoading &&
                <>
                    <Typography variant="h5" sx={{ paddingTop: "3rem", paddingBottom: "2rem" }}>Top 3 drink offers according to the students</Typography>
                    <ItemCard data={topThree} />
                </>
            }

        </>
    )
}

export default StartPage