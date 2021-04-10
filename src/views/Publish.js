import React from "react";
import { useHistory } from "react-router-dom";
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
import DoneIcon from "@material-ui/icons/Done";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import theme from "@/assets/theme";
import { publishClass } from "@/assets/css";
import NoramlAppbar from "@/component/NoramlAppbar";
import { PublishTpye } from "@/assets/dictionaries";
import { uploadImage, uploadFile } from "@/api/fileApi";
import { add } from "@/api/resourceApi";
import LinearWithValueLabel from "@/component/LinearWithValueLabel";

export default function Publish() {
	const classes = publishClass();
	const publishTpyes = PublishTpye;
	const history = useHistory();

	const [formData, setFormData] = React.useState({
		title: "",
		describe: "",
		type: "1",
		tags: ["请添加标签"],
		cover: ""
	});

	const [pageData, setPageData] = React.useState({
		coverSrc:
			"https://cdn.pixabay.com/photo/2018/08/19/01/04/thanks-3615884_1280.jpg",
		uploadLoading: false,
		submitLoading: false,
		tagName: "",
		dialog: false
	});

	const handleChangeForm = (name) => (event) => {
		setFormData({ ...formData, [name]: event.target.value });
	};

	const onSubmit = () => {
		setPageData({ ...pageData, submitLoading: true });
		add(Object.assign({}, formData))
			.then((res) => {
				setPageData({ ...pageData, submitLoading: false });
				history.push({
					pathname: "/Detail/" + res.data,
					params: {}
				});
			})
			.catch(function (res) {
				console.log(res);
			});
	};

	const deleteTag = (data) => () => {
		setFormData({
			...formData,
			tags: formData.tags.filter((tag) => tag !== data)
		});
	};

	const handleChangeTagName = () => (event) => {
		setPageData({ ...pageData, tagName: event.target.value });
	};

	const confirmDialog = () => {
		setFormData((o) => {
			let n = Object.assign({}, o);
			n.tags.push(pageData.tagName);
			return n;
		});
		setPageData({ ...pageData, dialog: false });
	};

	const uploadCover = () => (e) => {
		setPageData({ ...pageData, uploadLoading: true });
		uploadImage(e.target.files[0])
			.then((res) => {
				setFormData({ ...formData, cover: res.data });
				setPageData({
					...pageData,
					uploadLoading: false,
					coverSrc: process.env.REACT_APP_IMAGE_URL + res.data
				});
			})
			.catch(function (res) {
				console.log(res);
			});
	};

	const uploadResource = () => (e) => {
		setPageData({ ...pageData, uploadLoading: true });
		uploadFile(e.target.files[0])
			.then((res) => {
				setFormData({ ...formData, url: res.data });
				setPageData({ ...pageData, uploadLoading: false });
			})
			.catch(function (res) {
				console.log(res);
			});
	};

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NoramlAppbar />
				<div className={classes.root}>
					<Paper id="content">
						<img src={pageData.coverSrc} alt="图片加载失败" />
						<div>
							<form>
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
												setPageData({ ...pageData, dialog: true });
											}}>
											<AddIcon />
										</Fab>
									</div>
								</FormControl>
								<FormControl fullWidth>
									<InputLabel shrink>上传</InputLabel>
									<div className={classes.uploadCover}>
										{pageData.uploadLoading && (
											<LinearWithValueLabel></LinearWithValueLabel>
										)}
										<input
											accept="image/*"
											className={classes.hide}
											id="coverFile"
											type="file"
											onChange={uploadCover()}
										/>
										<label htmlFor="coverFile">
											<Button
												variant="outlined"
												component="span"
												className={classes.buttonClassname}
												startIcon={formData.cover && <DoneIcon />}>
												上传封面
											</Button>
										</label>
										<input
											className={classes.hide}
											id="resourceFile"
											type="file"
											onChange={uploadResource()}
										/>
										<label htmlFor="resourceFile">
											<Button
												variant="outlined"
												component="span"
												className={classes.buttonClassname}
												startIcon={formData.url && <DoneIcon />}>
												上传资源
											</Button>
										</label>
									</div>
								</FormControl>

								<Button fullWidth variant="outlined" onClick={onSubmit}>
									发布
								</Button>
							</form>
						</div>
					</Paper>

					<Dialog
						open={pageData.dialog}
						onClose={() => {
							setPageData({ ...pageData, dialog: false });
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

					<Backdrop className={classes.backdrop} open={pageData.submitLoading}>
						<CircularProgress color="inherit" />
					</Backdrop>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
