import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FullSearch from "../component/FullSearch";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
	whiteColor: {
		color: "#fff"
	}
}));

export default function NoramlAppbar(props) {
	const classes = useStyles();

	const history = useHistory();

	return (
		<AppBar position="static">
			<Toolbar>
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<Button
							size="large"
							className={classes.whiteColor}
							startIcon={<ArrowBackIosIcon />}
							onClick={() => history.goBack()}>
							返回
						</Button>
					</Grid>
					<Grid item xs={3}>
						<FullSearch iconPadding="0 5px" padding="0" />
					</Grid>
				</Grid>
				<Button
					size="large"
					className={classes.whiteColor}
					onClick={() =>
						history.push({
							pathname: "/Publish"
						})
					}>
					发布
				</Button>
				<Button size="large" className={classes.whiteColor}>
					登录
				</Button>
			</Toolbar>
		</AppBar>
	);
}
