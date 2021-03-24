import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import DeleteIcon from "@material-ui/icons/Delete";

import theme from "@/assets/theme";
import { detailClass } from "@/assets/css";
import NoramlAppbar from "@/component/NoramlAppbar";
import { get } from "@/api/resourceApi";

export default function Detail() {
	const classes = detailClass();
	const history = useHistory();
	const [resourceData, setResourceData] = useState({});
	const resourceId = history.location.pathname.split("/")[2];

	useEffect(() => {
		get(resourceId)
			.then((res) => {
				setResourceData(res.data);
			})
			.catch(function (res) {});
	}, [resourceId]);

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NoramlAppbar />
				<div className={classes.root}>
					<Paper id="content">
						<img src={resourceData.cover} alt="图片加载失败" />
						<div id="description">
							<Typography
								variant="body2"
								color="textSecondary"
								component="span"
								style={{ paddingTop: "5px" }}>
								{resourceData.describe}
							</Typography>
							<div>
								<Button
									variant="contained"
									color="primary"
									startIcon={<PlayForWorkIcon />}>
									下载封面
								</Button>
								<Button
									variant="contained"
									color="primary"
									startIcon={<PlayForWorkIcon />}>
									下载资源
								</Button>
								<Button
									variant="contained"
									color="secondary"
									startIcon={<DeleteIcon />}>
									举报资源
								</Button>
							</div>
						</div>
					</Paper>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
