import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";

const BasicRoute = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} activeClassName="active" />
		</Switch>
	</Router>
);

export default BasicRoute;
