import {  Button, Card, CardBody, CardHeader, Center, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);

        setInterval(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <Center minH="100dvh">
            <Card w="md" m="auto" h="100%">
                <CardHeader>
                    <Heading size="md">Login</Heading>
                </CardHeader>
                <CardBody>
                    <Flex gap="1rem" flexDirection="column">
                        <FormControl isRequired>
                            <FormLabel>E-mail</FormLabel>
                            <Input placeholder="E-mail" type="email" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Senha</FormLabel>
                            <InputGroup size="md">
                                <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder="Senha"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                                    {show ? "Esconder" : "Exibir"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button colorScheme="blue" mt="3" isLoading={isLoading} onClick={handleSubmit}>Login</Button>
                    </Flex>
                </CardBody>
            </Card>
        </Center>
    )
}

export default Login;