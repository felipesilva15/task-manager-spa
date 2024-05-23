import {  Button, Card, CardBody, CardHeader, Center, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const SignIn = () => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);

        setInterval(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <Card w="md" m="auto" h="100%">
            <CardHeader>
                <Heading size="md">Cadastre-se</Heading>
            </CardHeader>
            <CardBody>
                <Flex gap="1rem" flexDirection="column">
                    <FormControl isRequired>
                        <FormLabel>Nome</FormLabel>
                        <Input placeholder="Nome" type="text" />
                    </FormControl>
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
                    <Button colorScheme="blue" mt="3" isLoading={isLoading} onClick={handleSubmit}>Cadastrar</Button>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default SignIn;