import {
    HStack,
    Button,
    useColorMode,
    Spacer,
    useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue("#130f40", "white");
    const bg = useColorModeValue("#dff9fb", "#686de0");
    const bgBtn = useColorModeValue("#686de0", "#dff9fb");
    const colourBtn = useColorModeValue("white", "#130f40");

    return (
        <HStack px={6} py={3} spacing={5} shadow={"base"} bgColor={bg}>
            <Button
                transition={".3s"}
                _hover={{
                    transform: " scale(1.2) translateY(-4px)",
                    bgColor: "blackAlpha.200",
                }}
                variant={"unstyled"}
                color={color}
            >
                <NavLink to={"/"}>Home</NavLink>
            </Button>
            <Button
                transition={".3s"}
                _hover={{
                    transform: "translateY(-4px) scale(1.2)",
                    bgColor: "blackAlpha.200",
                }}
                variant={"unstyled"}
                color={color}
            >
                <NavLink to={"/exchanges"}>Exchanges</NavLink>
            </Button>
            <Button
                transition={".3s"}
                _hover={{
                    transform: "translateY(-4px) scale(1.2)",
                    bgColor: "blackAlpha.200",
                }}
                variant={"unstyled"}
                color={color}
            >
                <NavLink to={"/coins"}>Coins</NavLink>
            </Button>
            <Spacer />
            <Button
                color={colourBtn}
                bgColor={bgBtn}
                _hover={{ transform: "scale(1.1)" }}
                transition={".3s"}
                onClick={toggleColorMode}
            >
                Change Color Mode
            </Button>
        </HStack>
    );
};

export default Header;
