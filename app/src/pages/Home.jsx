import { Center } from "@chakra-ui/react";
import TaskList from "../components/TaskList";

const Home = () => {
    return <>
        {/* <Flex gap="1rem">
            <Link to="/auth/login">
                <Button>Login</Button>
            </Link>
            <Link to="/auth/signin">
                <Button>Cadastre-se</Button>
            </Link>
            <Link to="/">
                <Button>Home</Button>
            </Link>
        </Flex> */}
        <Center>
            <TaskList />
        </Center>
    </>
}

export default Home;