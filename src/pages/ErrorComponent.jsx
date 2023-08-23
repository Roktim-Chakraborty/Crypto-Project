import { Alert, AlertIcon } from "@chakra-ui/react";

const ErrorComponent = ({message}) => {
    return (
        <Alert
            status="error"
            p={"fixed"}
            bottom={'1rem'}
            left={"50%"}
            transform={"translate(-50%)"}
            w={"container.lg"}
            borderRadius={'.5rem'}
        >
            <AlertIcon />
            {message}
        </Alert>
    );
};

export default ErrorComponent;
