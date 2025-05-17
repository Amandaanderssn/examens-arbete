import { lazy } from 'react'

const MainLayout = lazy(() => import('./common/Layout/MainLayout'))
const LoginPage = lazy(() => import('./pages/Login'))
const StartPage = lazy(() => import('./pages/StartPage'))
const MyProfile = lazy(() => import('./pages/MyProfile'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const QrCodeLandingPage = lazy(() => import('./pages/qrCodePage'))

const routes = [
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/StartPage',
                element: <StartPage />,
            },
            {
                path: '/Search',
                element: <SearchPage />
            },
            {
                path: '/myProfile',
                element: <MyProfile />
            }
        ],
    },
    {
        path: '/qrCode',
        element: <QrCodeLandingPage />
    }

]

export default routes