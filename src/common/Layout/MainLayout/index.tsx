import React from "react"
import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../Components/ResponsiveAppBar"
import FooterComponent from "../../Components/FooterComponent"

const MainLayout = (): React.JSX.Element => {

    return (
        <>
            <ResponsiveAppBar />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default MainLayout