import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons";
import {  Button, Card, CardBody, CardHeader, Divider, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = 'http://localhost:3050/api/auth/login';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsLoading(true);

        if(!email) {
            setIsLoading(false);
            showErrorToast('O campo e-mail é obrigatório!');
            return;
        }

        if(!password) {
            setIsLoading(false);
            showErrorToast('O campo senha é obrigatório!');
            return;
        }

        axios.post(baseUrl, { email, password })
            .then((res) => {
                localStorage.setItem('user.name', res.data.name);
                localStorage.setItem('user.id', res.data.id);

                navigate('/');
            })
            .catch((err) => {
                setIsLoading(false);

                if (err.response.data) {
                    showErrorToast(err.response.data.message);
                } else {
                    showErrorToast('Ocorreu um erro inesperado');
                }
            });
    }

    const showErrorToast = (message) => {
        toast({
            title: 'Atenção',
            description: message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
            icon: <WarningIcon />,
        });
    }

    return (
        <Card w="md" m="auto" h="100%">
            <CardHeader>
                <Heading size="md">Login</Heading>
            </CardHeader>
            <CardBody>
                <Flex gap="1rem" flexDirection="column">
                    <FormControl isRequired>
                        <FormLabel>E-mail</FormLabel>
                        <Input placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Senha</FormLabel>
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Senha"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement>
                                <IconButton size="sm" variant="ghost" isRound={true} onClick={() => setShow(!show)} icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button colorScheme="blue" mt="3" isLoading={isLoading} onClick={handleSubmit}>Login</Button>
                    <Divider />
                    <Text>
                        Não possui uma conta? <Link color='teal.500' href='/auth/signin'>Faça o cadastro</Link>
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default Login;