import React from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";

const exploreItems = [
	{
		text: "全部",
		type: "0"
	},
	{
		text: "PPT",
		type: "1"
	},
	{
		text: "资源",
		type: "2"
	}
];

export default function ExploreMune() {
	const [anchorEl, setAnchorEl] = React.useState(false);

	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(false);
	};

	const explore = (type) => {
		history.push({
			pathname: "/Resource",
			params: {
				type: type
			}
		});
	};

	const open = Boolean(anchorEl);

	return (
		<div>
			<Button
				size="large"
				style={{
					color: "#FFF"
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
					horizontal: "center"
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center"
				}}>
				<List component="nav">
					{exploreItems.map((item) => (
						<ListItem
							button
							style={{ padding: "4px 16px" }}
							key={item.type}
							onClick={() => explore(item.type)}>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Popover>
		</div>
	);
}
