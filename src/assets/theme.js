import { createMuiTheme } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import cyan from "@material-ui/core/colors/cyan";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: cyan[600],
		},
		secondary: {
			main: deepOrange[500],
		},
	},
	background: {
		backgroundColor: "#f5f5f5",
	},
});

export default theme;
