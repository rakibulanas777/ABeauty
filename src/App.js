import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Styles
import "./styles/App.scss";
//Components
import Hero from "./components/Hero";
import ABeauty from "./components/ABeauty";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Nails from "./components/NAILS/Nails";
import Kryolipolyse from "./components/KRYOLIPOLYSE/Kryolipolyse";
import Dauerhafte from "./components/DAUERHAFTE/Dauerhafte";
import Kontakt from "./components/KONTAKT/Kontakt";
import Emshape from "./components/EMSHAPE/Emshape";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Switch>
						<Route path="/" exact>
							<Hero />
							<ABeauty />
							<WhyUs />
							<Footer />
						</Route>
						<Route path="/EMSHAPE" exact component={Emshape} />
						<Route path="/nails&manikure" exact component={Nails} />
						<Route path="/kryolipolyse" exact component={Kryolipolyse} />
						<Route
							path="/dauerhaftehaarentfernung"
							exact
							component={Dauerhafte}
						/>
						<Route path="/kontakt" exact component={Kontakt} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
