import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react"
import { UnlockIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom";

export default function Navbar() {
    const toast = useToast();
  
    const handlerLogout = () => {
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
                    <Text>Olá, usuário 👋</Text>
                    <Link to="/auth/login">
                        <Button Button colorScheme="blue" onClick={handlerLogout}>Logout</Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
  }