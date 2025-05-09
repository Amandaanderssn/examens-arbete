import { lazy } from 'react'

const LoginPage = lazy(() => import('./pages/Login'))
const StartPage = lazy(() => import('./pages/StartPage'))
const MyProfile = lazy(() => import('./pages/MyProfile'))

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
        path: '/:username/StartPage',
        element: <StartPage />,
    },
    {
        path: '/myProfile',
        element: <MyProfile />
    }
]

export default routes