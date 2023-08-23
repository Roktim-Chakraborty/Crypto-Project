import {
    Heading,
    Image,
    Text,
    VStack,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
    useColorMode();
    const color = useColorModeValue("#130f40", "white");
    const bg = useColorModeValue("#dff9fb", "#686de0");

    return (
        <NavLink to={`/coin/${id}`}>
            <VStack
                w={200}
                h={200}
                shadow={"lg"}
                p={8}
                borderRadius={"lg"}
                transition={"all .4s"}
                m={4}
                bg={bg}
                color={color}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)",
                    },
                }}
            >
                <Image
                    src={img}
                    width={"2.5rem"}
                    height={"2.5rem"}
                    objectFit={"contain"}
                    alt="Exchange"
                />

                <Heading size={"md"} noOfLines={1}>
                    {symbol}
                </Heading>
                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>
                    {price ? `${currencySymbol}${price}` : "NA"}
                </Text>
            </VStack>
        </NavLink>
    );
};

export default CoinCard;
