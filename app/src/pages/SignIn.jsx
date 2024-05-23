import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons";
import {  Button, Card, CardBody, CardHeader, Divider, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsLoading(true);

        setTimeout(() => {
            if(!name) {
                setIsLoading(false);
                showErrorToast('O campo nome é obrigatório!');
                return;
            }

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

            navigate('/auth/login');
        }, 1000);
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
                <Heading size="md">Cadastre-se</Heading>
            </CardHeader>
            <CardBody>
                <Flex gap="1rem" flexDirection="column">
                    <FormControl isRequired>
                        <FormLabel>Nome</FormLabel>
                        <Input placeholder="Nome" type="text" onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
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
                    <Button colorScheme="blue" mt="3" isLoading={isLoading} onClick={handleSubmit}>Cadastrar</Button>
                    <Divider />
                    <Text>
                        Já possui uma conta? <Link color='teal.500' href='/auth/login'>Faça o login</Link>
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default SignIn;