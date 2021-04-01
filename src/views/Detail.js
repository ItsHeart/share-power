import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

import theme from "@/assets/theme";
import { detailClass } from "@/assets/css";
import NoramlAppbar from "@/component/NoramlAppbar";
import { get } from "@/api/resourceApi";
import { transformDate } from "@/assets/commonApi";

const useStyles = makeStyles(({ spacing, palette }) => ({
	root: {
		minWidth: 100,
		padding: 0
	},
	tag: {
		borderRadius: "0 3px 3px 0",
		background: "#FFFFFF",
		borderLeft: `3px solid ${palette.primary.main}`,
		fontWeight: "bold",
		padding: "4px 8px",
		margin: spacing(1),
		marginLeft: 0
	}
}));

export default function Detail() {
	const classes = detailClass();
	const tagClasses = useStyles();
	const history = useHistory();
	const [resourceData, setResourceData] = useState({});
	const resourceId = history.location.pathname.split("/")[2];

	useEffect(() => {
		get(resourceId)
			.then((res) => {
				let data = res.data;
				data.tags = JSON.parse(res.data.tags);
				data.describeCopy =
					data.describe.length > 300
						? data.describe.slice(0, 300) + "..."
						: data.describe;
				setResourceData(data);
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
							<div className={tagClasses.root}>
								{resourceData.tags
									? resourceData.tags.map((tag) => (
											<Button className={tagClasses.tag} key={tag}>
												{tag}
											</Button>
									  ))
									: null}
							</div>
							<TextInfoContent
								height={400}
								overline={transformDate(resourceData.publishTime)}
								heading={resourceData.title}
								body={resourceData.describeCopy}
							/>
							<div id="buttons">
								<Button variant="outlined">下载</Button>
								<Button variant="outlined">复制描述</Button>
								<Button variant="outlined">称赞</Button>
								<Button variant="outlined">举报</Button>
							</div>
						</div>
					</Paper>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
