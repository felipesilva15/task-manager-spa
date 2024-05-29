import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react"
import { UnlockIcon } from "@chakra-ui/icons"
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function Navbar() {
    const [username, setUsername] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    const validateAndSetUser = useCallback(() => {
        const name = localStorage.getItem('user.name') ?? '';

        setUsername(name);

        if (!name) {
            navigate('/auth/login');
        }
    }, [navigate, setUsername]);

    useEffect(() => {
        validateAndSetUser();
    }, [validateAndSetUser])
  
    const handlerLogout = () => {
        localStorage.removeItem('user.name');

        toast({
            title: 'Logged out.',
            description: "Logout realizado com sucesso!",
            duration: 5000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />
        });
    };
    
    return (
        <Box bg="gray.700">
            <Flex as="nav" p="10px" mb="2rem" alignItems="center">
                <Heading as="h1" fontSize="1.5em">Task manager</Heading>
                <Spacer />
                <HStack spacing="20px"> 
                    <Text>Olá, {username} 👋</Text>
                    <Link to="/auth/login">
                        <Button colorScheme="blue" onClick={handlerLogout}>Logout</Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
  }