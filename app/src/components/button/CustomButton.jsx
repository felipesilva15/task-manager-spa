import { Button } from '@chakra-ui/react'

const CustomButton = (props) => {
    return <>
        <Button colorScheme='blue'>{ props.label || 'Button' }</Button>
    </>
}

export default CustomButton;