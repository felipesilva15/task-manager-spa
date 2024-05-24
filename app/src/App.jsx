import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import AuthLayout from './layouts/AuthLayout';
import { useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </>
  )
)

function App() {
  const { toggleColorMode } = useColorMode()

  useEffect(() => {
    toggleColorMode();
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
