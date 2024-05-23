import { DeleteIcon, WarningIcon } from "@chakra-ui/icons";
import { Checkbox, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3050/api/user';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        setIsLoading(true);

        axios.get(baseUrl)
            .then((res) => {
                setTasks(res.data);
            })
            .catch((err) => {
                setIsLoading(false);

                if (err.response.data) {
                    showErrorToast(err.response.data.message);
                } else {
                    showErrorToast('Ocorreu um erro inesperado');
                }
            });
    }, []);

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
        <>
            <TableContainer>
                <Table size='lg'>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Nome</Th>
                            <Th>E-mail</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            tasks.map((task) => {
                                return (
                                    <Tr key={task.id}>
                                        <Td>
                                            <Checkbox />
                                        </Td>
                                        <Td>{task.name}</Td>
                                        <Td>{task.email}</Td>
                                        <Td>
                                            <IconButton size="sm" variant="ghost" isRound={true} icon={<DeleteIcon color='red.400' />} />
                                        </Td>
                                    </Tr>
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TaskList;