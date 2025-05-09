import { Box, Button, TextField, Typography } from "@mui/material"
import React from "react"
import { SignUpComponentProps, SignUpFormValues } from "./types"

const SignUpFormComponent = (props: SignUpComponentProps): React.JSX.Element => {
    const { handleSignUp, errorMessage, usernameError } = props

    const [formValues, setFormValues] = React.useState<SignUpFormValues>({} as SignUpFormValues)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {errorMessage && <Typography style={{ color: 'red' }} variant="body1">{errorMessage}</Typography>}
            <TextField
                required={true}
                label="First Name"
                name="firstName"
                id="outlined-size-small"
                value={formValues.firstName || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
            />
            <TextField
                required={true}
                label="Last Name"
                name="lastName"
                id="outlined-size-small"
                value={formValues.lastName || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
            />
            <TextField
                required={true}
                label="Email"
                name="email"
                id="outlined-size-small"
                value={formValues.email || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
            />

            <TextField
                required={true}
                label="Username"
                name="username"
                error={usernameError !== "" && true}
                helperText={usernameError}
                id="outlined-size-small"
                value={formValues.username || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
            />

            <TextField
                required={true}
                label="Password"
                name="password"
                id="standard-adornment-password"
                type="password"
                value={formValues.password || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
            />
            <Button
                variant="contained"
                sx={{ marginRight: '1rem', width: '7rem', backgroundColor: 'black', color: '#397050' }}
                onClick={() => handleSignUp(formValues)}
            >Sign Up
            </Button>

        </Box>
    )
}

export default SignUpFormComponent