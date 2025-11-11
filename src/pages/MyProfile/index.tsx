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

    React.useEffect(() => {
        document.body.classList.add('myProfile');

        return () => {
            document.body.classList.remove('myProfile');
        };
    }, []);

    return (
        <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Typography variant="h2" sx={{ fontFamily: 'Luckiest Guy' }}>
                    {user?.firstName} {user?.lastName}
                </Typography>
                <Box>
                    <Typography variant="h6" sx={{ fontFamily: 'Quicksand', fontWeight: 700 }}>
                        Username:
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Quicksand' }}>
                        {user?.username}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontFamily: 'Quicksand', fontWeight: 700 }}>
                        Email
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Quicksand' }}>
                        {user?.email}
                    </Typography>
                </Box>

                <Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{ backgroundColor: 'black', fontFamily: 'Quicksand' }} onClick={handleLogOut}>Log out</Button>
                    {user?.firstName && user.lastName === "Guest" ?
                        <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', fontFamily: 'Quicksand', opacity: "0.2", cursor: "default" }}>Delete account</Button>

                        :
                        <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', fontFamily: 'Quicksand' }} onClick={handleDelete}>Delete account</Button>

                    }
                </Stack>
            </Box>
            {isOpen &&
                <ModalComponent isOpen={isOpen} handleConfirm={() => handleDeleteUser(user?.id)} handleCloseModal={() => setIsOpen(false)} />}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Quicksand', marginBottom: '1rem' }}>
                    Your personal qr code
                </Typography>
                {/* <img src={user?.qrCode} alt="Your personal qr-code"></img> */}
                <QRCodeSVG value={`http://${window.location.hostname}:5173${user?.qrCode}`} size={250} bgColor="none" />
            </Box>


        </Box>


    )
}

export default MyProfilePage;