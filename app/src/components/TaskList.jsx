import { DeleteIcon, WarningIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Heading, IconButton, Skeleton, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import TaskModal from "./TaskModal";
import OpenModalButton from "./OpenModalButton";

const baseUrl = process.env.REACT_APP_BASE_URL_API;

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const showErrorToast = useCallback((message) => {
        toast({
            title: 'Atenção',
            description: message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
            icon: <WarningIcon />,
        });
    }, [toast]);

    useEffect(() => {
        setIsLoading(true);
        const userId = localStorage.getItem('user.id');

        if(!userId) {
            return;
        }

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
    }, [showErrorToast]);

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

    const handleSave = (data) => {
        const updatedTasks = tasks;
        updatedTasks.push(data);

        setTasks(updatedTasks);
    }

    return (
        <>
            <Flex flexDir="column" gap="0.5rem">
                <Flex justifyContent="space-between" align="center">
                    <Heading size="md">Lista de tarefas</Heading>
                    <OpenModalButton onOpen={onOpen} />
                    <TaskModal isOpen={isOpen} onClose={onClose} onSave={handleSave} />
                </Flex>
                <TableContainer>
                    <Table size={{base: "sm", md: "lg"}} >
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th>
                                    
                                </Th>
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
            </Flex>
        </>
    );
}

export default TaskList;