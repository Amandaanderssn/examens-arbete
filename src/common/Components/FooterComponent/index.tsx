import { Typography } from "@mui/material"
import React from "react"

const FooterComponent = (): React.JSX.Element => {
    return (
        <footer style={{ backgroundColor: '#eaafde', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography>© 2025 Restaurant Specials. All rights reserved.</Typography>
            <a href="https://lordicon.com/" style={{ color: 'white' }}>Icons by Lordicon.com</a>
        </footer>
    )
}

export default FooterComponent