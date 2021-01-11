import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={40}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export default function Search() {
	const classes = useStyles();

	const [menu, setMenu] = React.useState(false);

	const handleClick = (event) => {
		setMenu(event.currentTarget);
	};

	const handleClose = () => {
		setMenu(false);
	};

	return (
		<Paper component="form" className={classes.root}>
			<IconButton className={classes.iconButton} aria-label="menu">
				<MenuIcon onClick={handleClick} />
			</IconButton>
			<StyledMenu anchorEl={menu} keepMounted open={menu} onClose={handleClose}>
				<StyledMenuItem onClick={handleClose}>
					<ListItemText primary="全部" />
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose}>
					<ListItemText primary="PPT" />
				</StyledMenuItem>
			</StyledMenu>
			<InputBase className={classes.input} placeholder="搜索" />
			<IconButton type="submit" className={classes.iconButton}>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
