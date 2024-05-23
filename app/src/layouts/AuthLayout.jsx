import { Center } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <>
      <Center minH="100dvh">
        <Outlet />
      </Center>
    </>
  )
}