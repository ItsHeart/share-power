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

import theme from "../assets/theme";
import { publishClass } from "../assets/css";
import NoramlAppbar from "../component/NoramlAppbar";
import { itemTpye } from "@/assets/dictionaries";

export default function Publish() {
	const classes = publishClass();
	const exploreItems = itemTpye;
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

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
									<Select labelId="demo-simple-select-label" size="small">
										{exploreItems.map((item) => (
											<MenuItem value={item.type}>{item.text}</MenuItem>
										))}
									</Select>
								</FormControl>
								<Button type="submit" fullWidth variant="outlined">
									发布
								</Button>
							</form>
						</div>
					</Paper>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
