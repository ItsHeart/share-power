import background from "../assets/images/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const homeClass = {
	mian: {
		backgroundImage: `URL(${background})`,
		height: "90vh",
		overflow: "hidden",
		border: "0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "0 15vw",
	},
	top: {
		display: "flex",
		justifyContent: "space-between",
		position: "fixed",
		width: "100vw",
		padding: "16px 40px 16px 24px",
		alignItems: "center",
	},
	whiteColor: {
		color: "#fff",
	},
	bigTitle: {
		color: "#fff",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		marginBottom: "10px",
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background,
		marginTop: "20px",
	},
	gridList: {
		width: "92vw",
		height: "auto",
	},
};

const resourceClass = {};

const detailClass = makeStyles({
	root: {
		padding: "10px",
		"& #content": {
			padding: "10px",
			display: "flex",
			justifyContent: "space-between",
			"& img": {
				width: "50%",
			},
			"& #description": {
				width: "48%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				"& button": {
					color: "white",
					margin: theme.spacing(1),
				},
			},
		},
	},
});

const commonClass = {
	center: {
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
	},
	spaceBetween: {
		display: "flex",
		justifyContent: "space-between",
	},
};

export { homeClass, resourceClass, detailClass, commonClass };
