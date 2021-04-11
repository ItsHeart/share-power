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
	}
}));

export default function SelectControl(props) {
	const classes = useStyles();
	const [condition, setCondition] = React.useState({
		type: 0,
		sort: 0
	});

	return (
		<Paper className={classes.root}>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">种类</InputLabel>
				<Select
					value={condition.type}
					onChange={(event) => {
						setCondition({ ...condition, type: event.target.value });
					}}
					autoWidth>
					<MenuItem value={0}>全部</MenuItem>
					<MenuItem value={1}>PPT</MenuItem>
					<MenuItem value={2}>资源</MenuItem>
				</Select>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">
					排列方式
				</InputLabel>
				<Select
					value={condition.sort}
					onChange={(event) => {
						setCondition({ ...condition, sort: event.target.value });
					}}
					autoWidth>
					<MenuItem value={0}>默认排序</MenuItem>
					<MenuItem value={1}>发布时间</MenuItem>
					<MenuItem value={2}>点赞数量</MenuItem>
					<MenuItem value={3}>相关程度</MenuItem>
				</Select>
			</FormControl>
		</Paper>
	);
}
