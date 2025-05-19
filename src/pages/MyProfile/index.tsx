import React from "react";
import { useUser } from "../../contexts/userContext";
import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import api from "../../Api/dbApi";
import ModalComponent from "../../common/Components/ModalComponent";

const MyProfilePage = (): React.JSX.Element => {
    const { user } = useUser()
    const { setUser } = useUser()
    const navigate = useNavigate()
    const [deleteUser] = api.useDeleteUserMutation()

    const [isOpen, setIsOpen] = React.useState(false)

    const handleLogOut = () => {
        setUser(null)
        navigate('/login')
    }

    const handleDelete = () => {
        setIsOpen(true)
        // handleDeleteUser(id)
    }

    const handleDeleteUser = async (id: number | undefined) => {

        try {
            await deleteUser(id).unwrap()
            console.log(`User with id ${id} deleted.`);
            navigate('/login')
        } catch (error) {
            console.error('Failed to delete the user:', error);
        }

    }

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
                    <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={handleLogOut}>Log out</Button>
                    <Button variant="outlined" sx={{ borderColor: 'black', color: 'black' }} onClick={handleDelete}>Delete account</Button>
                </Stack>
            </Box>
            {isOpen &&
                <ModalComponent isOpen={isOpen} handleConfirm={() => handleDeleteUser(user?.id)} handleCloseModal={() => setIsOpen(false)} />}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6">
                    Your personal qr code
                </Typography>
                {/* <img src={user?.qrCode} alt="Your personal qr-code"></img> */}
                <QRCodeSVG value={`http://192.168.0.14:5173/${user?.username}/qrCode`} size={200} />
            </Box>


        </Box>


    )
}

export default MyProfilePage;