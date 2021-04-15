import React from "react";
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
			padding: "2px 4px",
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
			padding: "0 6px",
			color: "#b3b3b3"
		}
	}));

	const classes = useStyles();

	const [selctType, setSelctType] = React.useState(0);

	const _selctType = (value) => {
		setSelctType(value);
	};

	const enter = (event) => {
		if (event && event.stopPropagation) {
			event.stopPropagation();
		}
		return false;
	};

	return (
		<Paper component="form" className={classes.root}>
			<SearchMune data={selctType} setData={_selctType} />
			<InputBase className={classes.input} placeholder="搜索" onKeyUp={enter} />
			<IconButton className={classes.iconButton}>
				<SearchIcon />
			</IconButton>
			<Divider className={classes.divider} orientation="vertical" />
			<Typography component="span" className={classes.type}>
				{selctType === "0" ? "全部" : selctType === "1" ? "PPT" : "资源"}
			</Typography>
		</Paper>
	);
}
