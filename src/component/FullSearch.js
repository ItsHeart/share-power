import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
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

export default function Search() {
	const classes = useStyles();

	const [selctType, setSelctType] = React.useState(0);

	const handleChange = (event) => {
		setSelctType(event.target.value);
	};

	return (
		<Paper component="form" className={classes.root}>
			<IconButton type="submit" className={classes.iconButton}>
				<SearchIcon />
			</IconButton>
			<InputBase className={classes.input} placeholder="搜索" />
			<FormControl>
				<Select
					value={selctType}
					onChange={handleChange}
					style={{ padding: "2px 6px" }}>
					<MenuItem value={0}>全部</MenuItem>
					<MenuItem value={1}>文章</MenuItem>
					<MenuItem value={2}>博客</MenuItem>
					<MenuItem value={3}>资源</MenuItem>
				</Select>
			</FormControl>
		</Paper>
	);
}
