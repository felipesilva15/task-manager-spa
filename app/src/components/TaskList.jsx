import { DeleteIcon, WarningIcon } from "@chakra-ui/icons";
import { Checkbox, IconButton, Skeleton, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const userId = localStorage.getItem('user.id');
const baseUrl = 'http://localhost:3050/api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        setIsLoading(true);

        axios.get(`${baseUrl}/user/${userId}/tasks`)
            .then((res) => {
                setTasks(res.data);
                setIsLoading(false);
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

    const handleCheck = (index, checked) => {
        const id = tasks[index].id;

        axios.patch(`${baseUrl}/task/${id}/toogle-completed`)
            .then((res) => {
                const updatedTasks = [...tasks];
                updatedTasks[index].completed = checked;

                setTasks(updatedTasks);
            })
            .catch((err) => {
                if (err.response.data) {
                    showErrorToast(err.response.data.message);
                } else {
                    showErrorToast('Ocorreu um erro inesperado');
                }
            });
    }

    const handleDelete = (index) => {
        const id = tasks[index].id;

        axios.delete(`${baseUrl}/task/${id}`)
            .then((res) => {
                const updatedTasks = [...tasks];
                updatedTasks.splice(index, 1);

                setTasks(updatedTasks);
            })
            .catch((err) => {
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
        <>
            <TableContainer>
                <Table size={{base: "sm", md: "lg"}} >
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Descrição</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {   
                            isLoading 
                            ?
                            <>
                                <Tr>
                                    <Td></Td>
                                    <Td><Skeleton height="20px" /></Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td></Td>
                                    <Td><Skeleton height="20px" /></Td>
                                    <Td></Td>
                                </Tr>
                                    <Tr>
                                    <Td></Td>
                                    <Td><Skeleton height="20px" /></Td>
                                    <Td></Td>
                                </Tr>
                            </>
                            :
                                tasks.map((task, i) => {
                                    return (
                                        <Tr key={task.id}>
                                            <Td>
                                                <Checkbox defaultChecked={task.completed} onChange={(e) => handleCheck(i, e.target.checked)} />
                                            </Td>
                                            <Td>
                                                <Text as={ task.completed ? 'del' : null}>
                                                    {task.description}
                                                </Text>
                                            </Td>
                                            <Td>
                                                <IconButton size="sm" variant="ghost" isRound={true} icon={<DeleteIcon color='red.400' />} onClick={() => {handleDelete(i)}} />
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