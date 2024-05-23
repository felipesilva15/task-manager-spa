import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <Flex gap="1rem">
            <Link to="/auth/login">
                <Button>Login</Button>
            </Link>
            <Link to="/auth/signin">
                <Button>Cadastre-se</Button>
            </Link>
            <Link to="/">
                <Button>Home</Button>
            </Link>
        </Flex>
    </>
}

export default Home;