import React from "react";
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
import { uploadFile } from "@/api/fileApi";

export default function Publish() {
	const classes = publishClass();
	const publishTpyes = PublishTpye;

	const [formData, setFormData] = React.useState({
		title: "",
		describe: "",
		type: "1",
		tags: ["请添加标签"]
	});

	const handleChangeForm = (name) => (event) => {
		setFormData({ ...formData, [name]: event.target.value });
	};

	const onSubmit = (data) => console.log(formData);
	const deleteTag = (data) => () => {
		setFormData({
			...formData,
			tags: formData.tags.filter((tag) => tag !== data)
		});
	};

	const [dialog, setDialog] = React.useState(false);
	const [tagName, setTagName] = React.useState("");

	const handleChangeTagName = () => (event) => {
		setTagName(event.target.value);
	};

	const confirmDialog = () => {
		formData.tags.push(tagName);
		setDialog(false);
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
							<form values={formData}>
								<TextField
									variant="outlined"
									fullWidth
									label="标题"
									size="small"
									onChange={handleChangeForm("title")}
								/>
								<TextField
									variant="outlined"
									fullWidth
									label="描述"
									size="small"
									multiline
									onChange={handleChangeForm("describe")}
								/>
								<FormControl fullWidth>
									<InputLabel shrink>类型</InputLabel>
									<Select
										size="small"
										value={formData.type}
										onChange={handleChangeForm("type")}>
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
										{formData.tags.map((data) => {
											return (
												<Chip
													label={data}
													key={data}
													onDelete={deleteTag(data)}
													variant="outlined"
												/>
											);
										})}

										<Fab
											color="primary"
											aria-label="add"
											size="small"
											onClick={() => {
												setDialog(true);
											}}>
											<AddIcon />
										</Fab>
									</div>
								</FormControl>
								<FormControl fullWidth>
									<InputLabel shrink>上传</InputLabel>
									<input
										accept="image/*"
										className={classes.hide}
										id="coverFile"
										multiple
										type="file"
									/>
									<label htmlFor="coverFile" className={classes.cover}>
										<Button variant="outlined" component="span">
											上传封面
										</Button>
									</label>
								</FormControl>

								<Button fullWidth variant="outlined" onClick={onSubmit}>
									发布
								</Button>
							</form>
						</div>
					</Paper>

					<Dialog
						open={dialog}
						onClose={() => {
							setDialog(false);
						}}
						aria-labelledby="form-dialog-title">
						<DialogTitle id="form-dialog-title">标签名称</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								fullWidth
								onChange={handleChangeTagName()}
							/>
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
