import { Box, Button, TextField, Typography } from "@mui/material"
import React from "react"
import LoginFormValues, { LoginComponentProps } from "./types"

const LoginFormComponent = (props: LoginComponentProps): React.JSX.Element => {
    const { handleLogin, errorMessage } = props

    const [formValues, setFormValues] = React.useState<LoginFormValues>({} as LoginFormValues)

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
                label="Username"
                name={"username"}
                id="outlined-size-small"
                value={formValues.username || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
                required={true}
            />


            <TextField
                label="Password"
                name="password"
                id="standard-adornment-password"
                type="password"
                value={formValues.password || ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event)}
                size="small"
                required={true}
            />
            <Button
                variant="contained"
                sx={{ marginRight: '1rem', width: '7rem', backgroundColor: 'black', color: '#eaafde' }}
                onClick={() => handleLogin(formValues)}
            >Login
            </Button>
        </Box>
    )
}

export default LoginFormComponent