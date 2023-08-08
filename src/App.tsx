import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'typeface-roboto';

import Layout from "./components/layouts/Layout";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import Tariff from "./pages/Tariff";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/react-training" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/autostrom" element={<Tariff />} />
					<Route path="/warmestrom" element={<Faq />} />
					<Route path="/gas" element={<Imprint />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
