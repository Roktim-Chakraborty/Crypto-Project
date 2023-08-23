import {
    Badge,
    Box,
    Container,
    HStack,
    Image,
    Progress,
    Radio,
    RadioGroup,
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text,
    VStack,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import ErrorComponent from "./ErrorComponent";

const CoinDetails = () => {
    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("inr");

    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const params = useParams();

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(
                    `${server}/coins/${params.id}`
                );

                setCoin(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchCoin();
    }, [params.id]);

    if (error) {
        return <ErrorComponent message={"Error While Fetching Coin"} />;
    }

    return (
        <Container maxW={"container.xl"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Box width={"full"} borderWidth={1}></Box>
                    <RadioGroup value={currency} onChange={setCurrency} p={8}>
                        <HStack spacing={4}>
                            <Radio value="inr">₹ INR</Radio>
                            <Radio value="eur">€ EUR</Radio>
                            <Radio value="usd">$ USD</Radio>
                        </HStack>
                    </RadioGroup>

                    <VStack spacing={4} p={16} align={"flex-start"}>
                        <Text
                            fontSize={"sm"}
                            alignSelf={"center"}
                            opacity={0.7}
                        >
                            Last Updated On:{" "}
                            {Date(coin.market_data.last_updated).split("G")[0]}
                        </Text>

                        <Image
                            src={coin.image.large}
                            w={16}
                            h={16}
                            objectFit={"contain"}
                        />

                        <Stat>
                            <StatLabel> {coin.name} </StatLabel>
                            <StatNumber>
                                {" "}
                                {currencySymbol}
                                {coin.market_data.current_price[currency]}{" "}
                            </StatNumber>

                            <StatHelpText>
                                <StatArrow
                                    type={
                                        coin.market_data
                                            .price_change_percentage_24h > 0
                                            ? "increase"
                                            : "decrease"
                                    }
                                />
                                {coin.market_data.price_change_percentage_24h}%
                            </StatHelpText>
                        </Stat>

                        <Badge
                            fontSize={"2xl"}
                            bgColor={"blackAlpha.900"}
                            color={"white"}
                        >
                            {`#${coin.market_cap_rank}`}
                        </Badge>

                        <CustomBar
                            low={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                        />
                        <CustomBar
                            high={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
                        />

                        <Box w={'full'} p={'4'}>
                          <Item title={'Max Supply'} value={9898} />
                        </Box>
                    </VStack>
                </>
            )}
        </Container>
    );
};

const Item = () =>(
  <HStack justifyContent={'space-between'} w={'full'} my={4}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'} ></Text>
    <Text></Text>
  </HStack>
)

const CustomBar = (high, low) => (
    <VStack>
        <Progress value={50} colorScheme="teal" w={"full"} />
        <HStack justifyContent={"space-between"} width={"full"}>
            <Badge  colorScheme="red" ></Badge>
            <Text fontSize={"sm"}>24HR RANGE</Text>
            <Badge  colorScheme="green"> {low} </Badge>
        </HStack>
    </VStack>
);

export default CoinDetails;
