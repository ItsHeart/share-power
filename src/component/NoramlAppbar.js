import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FullSearch from "../component/FullSearch";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	whiteColor: {
		color: "#fff",
	},
	home: {
		color: "#fff",
		userSelect: "none",
		cursor: "pointer",
	},
}));

export default function NoramlAppbar(props) {
	const classes = useStyles();

	const history = useHistory();
	const home = () => {
		history.push({
			pathname: "/",
		});
	};
	return (
		<AppBar position="static">
			<Toolbar>
				<Grid container spacing={3}>
					<Grid item xs={2} onClick={() => home()}>
						<Typography variant="h5" className={classes.home}>
							<Box fontWeight="fontWeightLight">Share Power</Box>
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<FullSearch padding="0" iconPadding="0 5px" />
					</Grid>
				</Grid>
				<Button size="large" className={classes.whiteColor}>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}
