import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Resource from "./views/Resource";
import Detail from "./views/Detail";

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
			<Route exact path="/Detail" component={Detail} activeClassName="active" />
		</Switch>
	</Router>
);

export default BasicRoute;
