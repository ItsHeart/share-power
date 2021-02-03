import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import DeleteIcon from "@material-ui/icons/Delete";

import theme from "../assets/theme";
import { detailClass } from "../assets/css";
import NoramlAppbar from "../component/NoramlAppbar";

class Detail extends Component {
	render() {
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<NoramlAppbar />
					<div style={detailClass.root}>
						<Paper style={detailClass.content}>
							<img
								src="https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476__480.jpg"
								style={detailClass.img}
								alt="图片加载失败"
							/>
							<div
								style={{
									width: "48%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}>
								<Typography
									variant="body2"
									color="textSecondary"
									component="span"
									style={{ paddingTop: "5px" }}>
									{
										"最早提出“大数据”时代到来的是全球知名咨询公司麦肯锡，麦肯锡称：“数据，已经渗透到当今每一个行业和业务职能领域，成为重要的生产因素。人们对于海量数据的挖掘和运用，预示着新一波生产率增长和消费者盈余浪潮的到来"
									}
								</Typography>
								<div>
									<Button
										variant="contained"
										color="primary"
										style={{ color: "white", margin: theme.spacing(1) }}
										startIcon={<PlayForWorkIcon />}>
										下载封面
									</Button>
									<Button
										variant="contained"
										color="primary"
										style={{ color: "white", margin: theme.spacing(1) }}
										startIcon={<PlayForWorkIcon />}>
										下载资源
									</Button>
									<Button
										variant="contained"
										color="secondary"
										style={{ color: "white", margin: theme.spacing(1) }}
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
}

export default withRouter(Detail);
