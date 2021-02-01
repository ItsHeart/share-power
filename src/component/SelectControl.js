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
		minWidth: 120,
	},
	root: {
		padding: "0 4vw",
	},
}));

export default function SelectControl(props) {
	const classes = useStyles();
	const [sort, setSort] = React.useState(0);

	const handleSort = (event) => {
		setSort(event.target.value);
	};

	return (
		<Paper className={classes.root}>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">
					排列方式
				</InputLabel>
				<Select value={sort} onChange={handleSort} autoWidth>
					<MenuItem value={0}>
						<em>默认排序</em>
					</MenuItem>
					<MenuItem value={1}>发布时间</MenuItem>
					<MenuItem value={2}>点赞数量</MenuItem>
					<MenuItem value={3}>相关程度</MenuItem>
				</Select>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-autowidth-label">
					排列方式
				</InputLabel>
				<Select value={sort} onChange={handleSort} autoWidth>
					<MenuItem value={0}>
						<em>默认排序</em>
					</MenuItem>
					<MenuItem value={1}>发布时间</MenuItem>
					<MenuItem value={2}>点赞数量</MenuItem>
					<MenuItem value={3}>相关程度</MenuItem>
				</Select>
			</FormControl>
		</Paper>
	);
}
