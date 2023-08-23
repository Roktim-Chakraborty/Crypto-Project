import { Heading, Image, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => {

    useColorMode();
    const color = useColorModeValue("#130f40", "white");
    const bg = useColorModeValue("#dff9fb", "#686de0");
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <VStack
                minWidth={"200"}
                justifyContent={'center'}
                color={color}
                bgColor={bg}
                h={"200"}
                shadow={"lg"}
                p={8}
                borderRadius={"lg"}
                transition={"all .4s"}
                m={4}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)",
                    },
                }}
            >
                <Image
                    src={img}
                    w={'5rem'}
                    h={'5rem'}
                    objectFit={"contain"}
                    alt="Exchange"
                />

                <Heading size={"md"} noOfLines={1}>
                    {rank}
                </Heading>
                <Text noOfLines={rank}></Text>
            </VStack>
        </a>
    );
};

export default ExchangeCard;
