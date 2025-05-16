import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBarComponent = (): React.JSX.Element => {
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    console.log(inputValue)

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '100%' }, marginTop: '1rem' }}
            noValidate
            autoComplete="off"

        >

            <FormControl sx={{ m: 1, width: '50%', display: 'flex', alignItems: 'center' }} variant="outlined">
                <OutlinedInput
                    sx={{
                        '.MuiOutlinedInput-input': { padding: '0.5rem' },
                        '&.MuiInputBase-root': { width: '80%' }
                    }}
                    value={inputValue}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    'search for an offer'
                                }
                                onClick={() => console.log("you clicked on search")}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}

export default SearchBarComponent