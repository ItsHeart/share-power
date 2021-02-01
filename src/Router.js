import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Resource from "./views/Resource";

const BasicRoute = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} activeClassName="active" />
			<Route
				exact
				path="/Resource"
				component={Resource}
				activeClassName="active"
			/>
		</Switch>
	</Router>
);

export default BasicRoute;
