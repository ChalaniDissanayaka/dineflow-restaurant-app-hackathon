import { Button } from "@chakra-ui/react";


function SubmitButton({ text, onClick, colorScheme="teal", className="" }) {
    return (
        <Button colorScheme={colorScheme} className={className} onClick={onClick} > 
            {text}
        </Button>
    );
}

export default SubmitButton;