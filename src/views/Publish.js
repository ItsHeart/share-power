import React from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import theme from "../assets/theme";
import { detailClass } from "../assets/css";
import NoramlAppbar from "../component/NoramlAppbar";

export default function Publish() {
	const classes = detailClass();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

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
						<div></div>
					</Paper>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
