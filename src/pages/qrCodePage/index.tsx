import { Box, Typography } from "@mui/material"
import React from "react"
import { useUser } from "../../contexts/userContext"

const QrCodePage = (): React.JSX.Element => {
    const { user } = useUser()

    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{
                width: '30rem', height: '10rem', border: '1px solid white',
                '@media (max-width: 30rem)': {
                    transform: 'rotate(90deg)'
                },
            }}>
                <Typography>{user?.firstName} {user?.lastName}</Typography>
            </Box>
        </Box>

    )
}

export default QrCodePage