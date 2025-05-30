import { Box, Typography } from "@mui/material"
import React from "react"
import Logga from '../../images/vitLogga.svg'

const QrCodePage = (): React.JSX.Element => {

    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{
                width: '40rem', height: '20rem', border: '1px solid white', borderRadius: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem',
                '@media (max-width: 30rem)': {
                    transform: 'rotate(90deg)'
                },
            }}>
                <Typography sx={{ fontFamily: 'Alumni Sans Pinstripe', fontSize: '2rem' }}>Student card is accepted by:</Typography>
                <img src={Logga} style={{ width: '35rem', marginTop: '1rem' }} />
            </Box>
        </Box>

    )
}

export default QrCodePage