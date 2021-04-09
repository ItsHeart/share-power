import React from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import theme from "../assets/theme";
import { publishClass } from "../assets/css";
import NoramlAppbar from "../component/NoramlAppbar";
import { PublishTpye } from "@/assets/dictionaries";

export default function Publish() {
	const classes = publishClass();
	const { register, handleSubmit, errors } = useForm();
	const publishTpyes = PublishTpye;

	const [type, setType] = React.useState("1");
	const [tagData, setTagData] = React.useState([]);

	const onSubmit = (data) => console.log(data);
	const deleteTag = (data) => {
		console.log(data);
	};

	const [dialog, setDialog] = React.useState(false);
	const [tagName, setTagName] = React.useState("");
	const handleChangeTagName = (name) => (event) => {
		setTagName(event.target.value);
	};
	const openDialog = () => {
		setDialog(true);
	};
	const closeDialog = () => {
		setDialog(false);
	};
	const confirmDialog = () => {
		console.log(tagName);
		// let temp = tagData;
		// temp.push({
		// 	lable: data
		// });
		// setTagData(temp);
		// setDialog(false);
	};

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NoramlAppbar />
				<div className={classes.root}>
					<Paper id="content">
						<img
							src="https://cdn.pixabay.com/photo/2018/08/19/01/04/thanks-3615884_1280.jpg"
							alt="图片加载失败"
						/>
						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								<TextField
									inputRef={register({
										required: true
									})}
									error={Boolean(errors.title)}
									variant="outlined"
									fullWidth
									label="标题"
									name="title"
									size="small"
									helperText={errors.title && "请输入标题"}
								/>
								<TextField
									inputRef={register()}
									variant="outlined"
									fullWidth
									label="描述"
									name="describe"
									size="small"
									multiline
								/>
								<FormControl fullWidth>
									<InputLabel shrink>类型</InputLabel>
									<Select
										size="small"
										value={type}
										onChange={(event) => {
											setType(event.target.value);
										}}>
										{publishTpyes.map((item) => (
											<MenuItem value={item.type} key={item.type}>
												{item.text}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl fullWidth>
									<InputLabel shrink>标签</InputLabel>
									<div className={classes.chips}>
										{tagData.map((data) => {
											<Chip
												label="Deletable"
												onDelete={deleteTag}
												variant="outlined"
											/>;
										})}

										<Fab
											color="primary"
											aria-label="add"
											size="small"
											onClick={openDialog}>
											<AddIcon />
										</Fab>
									</div>
								</FormControl>
								<Button type="submit" fullWidth variant="outlined">
									发布
								</Button>
							</form>
						</div>
					</Paper>

					<Dialog
						open={dialog}
						onClose={closeDialog}
						aria-labelledby="form-dialog-title">
						<DialogTitle id="form-dialog-title">标签名称</DialogTitle>
						<DialogContent>
							<TextField autoFocus margin="dense" value={tagName} fullWidth />
						</DialogContent>
						<DialogActions>
							<Button onClick={confirmDialog} color="primary">
								确定
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
