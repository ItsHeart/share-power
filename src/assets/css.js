import background from "../assets/images/background.jpg";
import { makeStyles } from "@material-ui/core/styles";

const homeClass = makeStyles({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		"& button": {
			color: "#fff"
		}
	},
	top: {
		display: "flex",
		justifyContent: "space-between",
		position: "fixed",
		width: "100vw",
		padding: "16px 40px 16px 24px",
		alignItems: "center",
		"& div": {
			display: "flex",
			justifyContent: "space-between",
			"& button": {
				color: "#fff"
			}
		}
	},
	main: {
		backgroundImage: `URL(${background})`,
		height: "90vh",
		overflow: "hidden",
		border: "0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "0 15vw",
		"& #bigTitle": {
			color: "#fff",
			display: "flex",
			justifyContent: "center",
			alignContent: "center",
			marginBottom: "10px"
		}
	}
});

const cardListClass = makeStyles({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		marginTop: "20px",
		"& .MuiGridList-root": {
			width: "92vw",
			height: "auto"
		}
	}
});

const detailClass = makeStyles({
	root: {
		padding: "10px",
		"& #content": {
			padding: "10px",
			display: "flex",
			justifyContent: "space-between",
			"& img": {
				width: "50%"
			},
			"& #description": {
				width: "48%",
				display: "flex",
				flexDirection: "column",
				position: "relative",
				"& #buttons": {
					position: "absolute",
					bottom: 0,
					"& Button": {
						marginRight: "10px"
					}
				}
			}
		}
	}
});

export { homeClass, detailClass, cardListClass };
