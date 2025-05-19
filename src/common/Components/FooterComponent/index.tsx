import { Typography } from "@mui/material"
import React from "react"

const FooterComponent = (): React.JSX.Element => {
    return (
        <footer style={{ backgroundColor: '#eaafde', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>© 2025 Restaurant Specials. All rights reserved.</Typography>
        </footer>
    )
}

export default FooterComponent