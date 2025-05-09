import { Box, Grid, Typography } from "@mui/material";
import Image from '../../images/Cheers.jpg';
import React from "react";
import LoginFormComponent from "../../common/Components/LoginFormComponent";
import SignUpFormComponent from "../../common/Components/SignUpFormComponent";
import api from "../../Api/dbApi";
import LoginFormValues from "../../common/Components/LoginFormComponent/types";
import { useNavigate } from "react-router-dom";
import { SignUpFormValues } from "../../common/Components/SignUpFormComponent/types";

const LoginPage = (): React.JSX.Element => {
    const [signUpForm, setShowSignUpForm] = React.useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = React.useState<string>("");
    const [signUpErrorMessage, setSignUpErrorMessage] = React.useState<string>("");
    const [usernameError, setUsernameError] = React.useState<string>("");

    const { data: allUsers = [] } = api.useGetAllUsersQuery()
    const [postUser] = api.usePostUserMutation()

    const navigate = useNavigate();

    const handleSignUpClick = (): void => {
        setShowSignUpForm(true);
    };

    const handleLoginClick = (): void => {
        setShowSignUpForm(false);
    };

    const handleLogin = (value: LoginFormValues) => {
        if (!value.username || !value.password) {
            setLoginErrorMessage("Username and password are required.");
            return;
        }
        const matchedUser = allUsers.find((user) => user.username === value.username && user.password === value.password);

        if (matchedUser) {
            setLoginErrorMessage("");
            navigate(`/${matchedUser.username}/StartPage`)
        }
        else {
            setLoginErrorMessage("Invalid username or password.");
        }
        return value;
    }

    const handleSignUp = async (value: SignUpFormValues) => {
        if (!value.username || !value.password || !value.firstName || !value.lastName || !value.email) {
            setSignUpErrorMessage("Fill in all required fields please.");
            return;
        } else if (allUsers.some((user) => user.username === value.username)) {
            setUsernameError("Username already exists.");
            return;
        }

        try {
            await postUser(value).unwrap();
            window.location.reload()
        } catch (error) {
            console.error("Failed to save the user: ", error);
        }

        return value;
    }

    return (
        <Grid container={true} spacing={2} sx={{ width: '100vw' }}>
            <Grid size={6} sx={{ backgroundImage: Image }}>
                <Box sx={{ backgroundImage: `url(${Image})`, height: '100vh', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                    <Typography variant="h1">
                        Welcome
                    </Typography>
                </Box>
            </Grid>
            <Grid size={6}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
                    noValidate
                    autoComplete="off"
                >

                    <Typography variant='h2' color="black">
                        {!signUpForm ? 'Login' : 'Sign up'}
                    </Typography>
                    {!signUpForm ?
                        <LoginFormComponent handleLogin={handleLogin} errorMessage={loginErrorMessage} />
                        :
                        <SignUpFormComponent handleSignUp={handleSignUp} errorMessage={signUpErrorMessage} usernameError={usernameError} />
                    }

                    <Box sx={{ width: '80%', marginTop: 2, display: 'flex', justifyContent: 'center' }}>
                        {!signUpForm ?
                            <Typography
                                variant="subtitle1"
                                sx={{ width: 'auto', borderColor: 'black', color: 'black', cursor: 'pointer' }}
                                onClick={handleSignUpClick}
                            >Don't have an account? Sign up here
                            </Typography>
                            :
                            <Typography
                                variant="subtitle1"
                                sx={{ width: 'auto', borderColor: 'black', color: 'black', cursor: 'pointer' }}
                                onClick={handleLoginClick}
                            >Already have an account? Login here
                            </Typography>
                        }

                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default LoginPage;