import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SearchBarComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: any[]
    handleSearch: (value: string[]) => void
}

const SearchBarComponent = (props: SearchBarComponentProps): React.JSX.Element => {
    const { options, handleSearch } = props

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

    const onSearch = () => {
        handleSearch(selectedValues)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: 'fit-content' },
                // '&.MuiInputBase-root': { backgroundColor: 'red' },
                marginTop: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
            noValidate
            autoComplete="off"

        >

            <Autocomplete
                sx={{
                    '&.MuiAutocomplete-root': { width: '80%' },
                    '& .MuiInputLabel-root': {
                        color: '#eaafde',
                    },
                    '& label.Mui-focused': {
                        color: '#b677aa',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#eaafde'
                        },
                        '&:hover fieldset': {
                            borderColor: '#b677aa',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#985c8d',
                        }
                    },
                    '&.MuiSvgIcon-root': {
                        color: '#eaafde',
                    },
                    '.MuiAutocomplete-tag': { backgroundColor: '#eaafde' },
                    display: 'flex',
                    justifyContent: 'center'
                }}
                multiple
                id="tags-outlined"
                options={options}
                value={selectedValues}
                getOptionLabel={(option) => option}
                onChange={(_event, newValue) => setSelectedValues(newValue)}
                filterSelectedOptions
                renderOption={(inputValue, option) => (
                    <li {...inputValue} key={option}>
                        {option}
                    </li>
                )}
                renderInput={(inputValue) => (
                    <TextField
                        {...inputValue}
                        key={inputValue.id}
                        label="Select city to see their offers"
                        placeholder="You can write keywords"
                    />
                )}
            />
            <InputAdornment position="end" sx={{ width: 'fit-content' }}>
                <IconButton onClick={() => { console.log("you searched"); onSearch() }}>
                    <SearchIcon sx={{ color: '#eaafde' }} />
                </IconButton>
            </InputAdornment>

        </Box>
    );
}

export default SearchBarComponent