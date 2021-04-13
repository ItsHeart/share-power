import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
	const [condition, setCondition] = React.useState({
		type: 0,
		sort: 0,
		order: 0
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

			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">
					排序方式
				</InputLabel>
				<Select
					value={condition.order}
					onChange={(event) => {
						setCondition({ ...condition, order: event.target.value });
					}}
					autoWidth>
					<MenuItem value={0}>默认</MenuItem>
					<MenuItem value={1}>降序</MenuItem>
					<MenuItem value={2}>升序</MenuItem>
				</Select>
			</FormControl>
			<FormControl className={classes.search}>
				<Button variant="outlined">重新搜索</Button>
			</FormControl>
		</Paper>
	);
}
