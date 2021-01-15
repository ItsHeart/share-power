import React from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function ExploreMune() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div>
			<Button
				size="large"
				style={{
					color: "#FFF",
				}}
				onClick={handleClick}>
				Explore
			</Button>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}>
				<List component="nav" aria-label="secondary mailbox folders">
					<ListItem button>
						<ListItemText primary="全部" />
					</ListItem>
					<ListItemLink href="#simple-list">
						<ListItemText primary="博客" />
					</ListItemLink>
					<ListItemLink href="#simple-list">
						<ListItemText primary="资源" />
					</ListItemLink>
				</List>
			</Popover>
		</div>
	);
}
