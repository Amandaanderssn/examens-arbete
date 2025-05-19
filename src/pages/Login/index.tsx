import { Box, Typography } from "@mui/material";
// import Image from '../../images/Cheers.jpg';
import React from "react";
import api from "../../Api/dbApi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import LoginFormComponent from "../../common/Components/LoginFormComponent";
import LoginFormValues from "../../common/Components/LoginFormComponent/types";
import SignUpFormComponent from "../../common/Components/SignUpFormComponent";
import { SignUpFormValues } from "../../common/Components/SignUpFormComponent/types";
import LoginBackgroundAnimation from "../../common/Animations/LoginAnimation";
import './style.css'

const LoginPage = (): React.JSX.Element => {
    const [signUpForm, setShowSignUpForm] = React.useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = React.useState<string>("");
    const [signUpErrorMessage, setSignUpErrorMessage] = React.useState<string>("");
    const [usernameError, setUsernameError] = React.useState<string>("");
    const { setUser } = useUser();

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
            setUser(matchedUser)
            navigate(`/StartPage`)
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

    React.useEffect(() => {
        setLoginErrorMessage('')
        setSignUpErrorMessage('')
        setUsernameError('')
    }, [signUpForm])

    return (
        <Box sx={{ position: 'relative', height: '100vh' }} className={'container'}>
            <LoginBackgroundAnimation />
            <Box
                className={`card ${signUpForm ? 'flipped' : ''}`}
                component="form"
                sx={
                    {
                        '& .MuiTextField-root': { m: 1, width: '15rem' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // height: '40vh',
                        position: 'absolute',
                        top: '20%',
                        left: '36%',
                        // backgroundColor: '#034121',
                        backgroundColor: '#eaafde',
                        padding: '4rem',
                        borderRadius: '1.5rem'
                    }
                }
                noValidate
                autoComplete="off"
            >
                {!signUpForm ? (
                    <>
                        <Typography variant='h2' color="black">
                            Login
                        </Typography>
                        <LoginFormComponent handleLogin={handleLogin} errorMessage={loginErrorMessage} />
                        <Typography
                            variant="subtitle1"
                            sx={{ width: 'auto', borderColor: 'black', color: 'black', cursor: 'pointer' }}
                            onClick={handleSignUpClick}
                        >Don't have an account? Sign up here
                        </Typography>
                    </>
                )
                    :
                    (<>
                        <Typography variant='h2' color="black" className="back">
                            Sign up
                        </Typography>
                        <SignUpFormComponent handleSignUp={handleSignUp} errorMessage={signUpErrorMessage} usernameError={usernameError} />
                        <Typography
                            className="back"
                            variant="subtitle1"
                            sx={{ width: 'auto', borderColor: 'black', color: 'black', cursor: 'pointer' }}
                            onClick={handleLoginClick}
                        >Already have an account? Login here
                        </Typography>
                    </>)
                    // )
                }
            </Box>
        </Box>
    );
}

export default LoginPage;