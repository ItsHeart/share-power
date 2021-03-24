import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Resource from "./views/Resource";
import Detail from "./views/Detail";
import Publish from "./views/Publish";

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
			<Route
				exact
				path="/Detail/:id"
				component={Detail}
				activeClassName="active"
			/>
			<Route
				exact
				path="/Publish"
				component={Publish}
				activeClassName="active"
			/>
		</Switch>
	</Router>
);

export default BasicRoute;
