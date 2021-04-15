import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SearchMune from "@/component/SearchMune";
import Divider from "@material-ui/core/Divider";

export default function Search(props) {
	const useStyles = makeStyles((theme) => ({
		root: {
			padding: (props.padding ? "0" : "2px") + " 4px",
			display: "flex",
			alignItems: "center"
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1
		},
		iconButton: {
			padding: props.iconPadding
		},
		divider: {
			height: 28,
			margin: 4
		},
		type: {
			padding: "0 10px 0 6px",
			color: "#b3b3b3"
		}
	}));

	const classes = useStyles();
	const history = useHistory();

	const [searchParm, setSearchParam] = React.useState({
		type: 0,
		text: ""
	});

	const _setType = (value) => {
		setSearchParam((o) => {
			let n = Object.assign({}, o);
			n.type = value;
			return n;
		});
	};

	const search = () => {
		history.push({
			pathname: "/Resource",
			params: {
				type: searchParm.type,
				text: searchParm.text
			}
		});
	};

	const enter = (event) => {
		if (event.keyCode === 13) {
			search();
		}
	};

	return (
		<Paper component="div" className={classes.root}>
			<SearchMune data={searchParm.type} setData={_setType} />
			<InputBase
				className={classes.input}
				placeholder="搜索"
				onKeyUp={enter}
				onChange={(event) => {
					setSearchParam({ ...searchParm, text: event.target.value });
				}}
			/>
			<IconButton className={classes.iconButton} onClick={search}>
				<SearchIcon />
			</IconButton>
			<Divider className={classes.divider} orientation="vertical" />
			<Typography component="span" className={classes.type}>
				{searchParm.type === "0"
					? "全部"
					: searchParm.type === "1"
					? "PPT"
					: "资源"}
			</Typography>
		</Paper>
	);
}
