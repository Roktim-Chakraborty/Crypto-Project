import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import Exchanges from "./pages/Exchanges";
import CoinDetails from "./pages/CoinDetails";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="coins" element={<Coins />} />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="coin/:id" element={<CoinDetails />} />
        </Route>
    )
);


function App() {
    return <RouterProvider router={router} />;
}

export default App;
