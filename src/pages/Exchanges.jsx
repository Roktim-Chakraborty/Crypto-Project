import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import {
    Container,
    HStack,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import ExchangeCard from "../components/ExchangeCard";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);

                setExchanges(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchExchanges();
    }, []);

    if (error) {
        return <ErrorComponent />;
    }

    return (
        <div>
            <Container maxW={"container.xl"}>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
                            {exchanges.map((i) => (
                                <ExchangeCard
                                    key={i.name}
                                    name={i.name}
                                    img={i.image}
                                    rank={i.trust_score_rank}
                                    url={i.url}
                                />
                            ))}
                        </HStack>
                    </>
                )}
            </Container>
        </div>
    );
};

export default Exchanges;
