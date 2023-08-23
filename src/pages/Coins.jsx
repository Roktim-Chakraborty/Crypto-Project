import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import {
    Button,
    Container,
    HStack,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");

    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    };

    const btns = new Array(102).fill(1);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(
                    `${server}/coins/markets?vs_currency=${currency}&page=${page}`
                );

                setCoins(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchCoins();
    }, [currency, page]);

    if (error) {
        return <ErrorComponent message={"Error While Fetching"} />;
    }

    return (
        <Container maxW={"container.xl"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <RadioGroup value={currency} onChange={setCurrency} p={8}>
                        <HStack spacing={4}>
                            <Radio value="inr">₹ INR</Radio>
                            <Radio value="eur">€ EUR</Radio>
                            <Radio value="usd">$ USD</Radio>
                        </HStack>
                    </RadioGroup>
                    <HStack wrap={"wrap"}>
                        {coins.map((i) => (
                            <CoinCard
                                id={i.id}
                                key={i.name}
                                name={i.name}
                                price={i.current_price}
                                img={i.image}
                                symbol={i.symbol}
                                currencySymbol={currencySymbol}
                            />
                        ))}
                    </HStack>

                    <HStack
                        w={"container.xl"}
                        overflowX={"auto"}
                        p={8}
                        pl={0}
                        boxSizing="border-box"
                    >
                        {btns.map((btn, index) => (
                            <Button
                                key={index}
                                bgColor={"blackAlpha.900"}
                                color={"white"}
                                onClick={() => changePage(index + 1)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </HStack>
                </>
            )}
        </Container>
    );
};
export default Coins;
