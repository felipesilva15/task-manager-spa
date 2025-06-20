import { WarningIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const userId = localStorage.getItem('user.id');
const baseUrl = `${process.env.REACT_APP_BASE_URL_API}/task`;
const emptyData = { id: '', description: '', userId: userId, completed: false };

const TaskModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState(emptyData);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setIsLoading(true);

        if(!formData.description) {
            setIsLoading(false);
            showErrorToast('O campo descrição é obrigatório!');
            return;
        }

        axios.post(baseUrl, formData)
            .then((res) => {
                onSave(res.data);
                setFormData(emptyData);
                setIsLoading(false);
                
                onClose();
            })
            .catch((err) => {
                setIsLoading(false);

                if (err.response.data) {
                    showErrorToast(err.response.data.message);
                } else {
                    showErrorToast('Ocorreu um erro inesperado');
                }
            });
    };

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
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Tarefa</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={3}>
                        <FormControl isRequired>
                            <FormLabel>Descrição</FormLabel>
                            <Input name="description" value={formData.description} onChange={handleChange} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit} isLoading={isLoading}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default TaskModal;