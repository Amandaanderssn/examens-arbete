import React from "react";
import { useUser } from "../../contexts/userContext";
import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyProfilePage = (): React.JSX.Element => {
    const { user } = useUser()

    return (
        <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Typography variant="h2">
                    {user?.firstName} {user?.lastName}
                </Typography>
                <Box>
                    <Typography variant="h6" >
                        Username:
                    </Typography>
                    <Typography variant="h6">
                        {user?.username}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Email
                    </Typography>
                    <Typography variant="h6">
                        {user?.email}
                    </Typography>
                </Box>

                <Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{ backgroundColor: 'black' }}>Logout</Button>
                    <Button variant="outlined" sx={{ borderColor: 'black', color: 'black' }}>Delete account</Button>
                </Stack>

            </Box>
            <Box>
                <Typography variant="h6">
                    Your personal qr code
                </Typography>
                <img src={user?.qrCode} alt="Your personal qr-code"></img>
            </Box>


        </Box>


    )
}

export default MyProfilePage;