import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";

import { itemTpye } from "@/assets/dictionaries";

const useStyles = makeStyles((theme) => ({
	iconButton: {
		padding: 10
	}
}));

export default function SearchMune(props) {
	const [anchorEl, setAnchorEl] = React.useState(false);
	const exploreItems = itemTpye;
	const classes = useStyles();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(false);
	};

	const open = Boolean(anchorEl);

	return (
		<div>
			<IconButton
				className={classes.iconButton}
				aria-label="menu"
				onClick={handleClick}>
				<MenuIcon />
			</IconButton>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center"
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center"
				}}>
				<List component="nav">
					{exploreItems.map((item) => (
						<ListItem button style={{ padding: "2px 10px" }} key={item.type}>
							<ListItemText
								primary={item.text}
								onClick={() => {
									props.setData(item.type);
									setAnchorEl(false);
								}}
							/>
						</ListItem>
					))}
				</List>
			</Popover>
		</div>
	);
}
