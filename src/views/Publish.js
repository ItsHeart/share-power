import React from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import theme from "../assets/theme";
import { detailClass } from "../assets/css";
import NoramlAppbar from "../component/NoramlAppbar";

export default function Publish() {
	const classes = detailClass();

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
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
										required: "no email is dame"
									})}
									error={Boolean(errors.email)}
									variant="outlined"
									margin="normal"
									fullWidth
									id="email"
									label="Email Address"
									name="email"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary">
									提交
								</Button>
							</form>
						</div>
					</Paper>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
