import { Typography } from "@mui/material"
import ResponsiveAppBar from "../../common/Components/ResponsiveAppBar"

const StartPage = (): React.JSX.Element => {
    return (
        <>
            <ResponsiveAppBar />
            <Typography variant="h5">Top 3 offers according to the students</Typography>
        </>
    )
}

export default StartPage