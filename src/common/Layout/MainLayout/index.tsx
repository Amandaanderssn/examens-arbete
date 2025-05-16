import React from "react"
import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../../Components/ResponsiveAppBar"

const MainLayout = (): React.JSX.Element => {

    return (
        <>
            <ResponsiveAppBar />
            <Outlet />
        </>
    )
}

export default MainLayout