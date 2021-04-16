import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	root: {
		padding: "0 4vw"
	},
	search: {
		margin: theme.spacing(1.8)
	}
}));

export default function SelectControl(props) {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">种类</InputLabel>
				<Select
					value={props.data.type}
					onChange={(event) => {
						props.setData("type", event.target.value);
					}}
					autoWidth>
					<MenuItem value={"0"}>全部</MenuItem>
					<MenuItem value={"1"}>PPT</MenuItem>
					<MenuItem value={"2"}>资源</MenuItem>
				</Select>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">
					排列方式
				</InputLabel>
				<Select
					value={props.data.sort}
					onChange={(event) => {
						props.setData("sort", event.target.value);
					}}
					autoWidth>
					<MenuItem value={"0"}>发布时间</MenuItem>
					<MenuItem value={"1"}>点赞数量</MenuItem>
				</Select>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">
					排序方式
				</InputLabel>
				<Select
					value={props.data.order}
					onChange={(event) => {
						props.setData("order", event.target.value);
					}}
					autoWidth>
					<MenuItem value={"0"}>降序</MenuItem>
					<MenuItem value={"1"}>升序</MenuItem>
				</Select>
			</FormControl>
		</Paper>
	);
}
