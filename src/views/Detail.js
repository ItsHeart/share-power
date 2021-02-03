import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../assets/theme";
import { homeClass } from "../assets/css";
import NoramlAppbar from "../component/NoramlAppbar";

class Detail extends Component {
	render() {
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<NoramlAppbar />
					<div style={homeClass.root}></div>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default withRouter(Detail);
