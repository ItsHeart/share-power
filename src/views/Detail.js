import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Skeleton from "react-loading-skeleton";

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

				new Promise(function (resolve, reject) {
					const img = new Image();
					img.onload = resolve;
					img.onerror = reject;
					data.cover =
						data.cover.indexOf("http") === -1
							? process.env.REACT_APP_IMAGE_URL + data.cover
							: data.cover;
					img.src = data.cover;
				}).then((res) => {
					setResourceData(data);
				});
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
						{resourceData.cover ? (
							<img src={resourceData.cover} alt="??????????????????" />
						) : (
							<Skeleton variant="rect" height={450} />
						)}

						<div id="description">
							<div className={tagClasses.root}>
								{resourceData.tags ? (
									resourceData.tags.map((tag) => (
										<Button className={tagClasses.tag} key={tag}>
											{tag}
										</Button>
									))
								) : (
									<Skeleton variant="rect" height={40} />
								)}
							</div>
							{resourceData.title ? (
								<TextInfoContent
									height={400}
									overline={transformDate(resourceData.publishTime)}
									heading={resourceData.title}
									body={resourceData.describeCopy}
								/>
							) : (
								[0, 1, 2, 3, 4].map((id) => <Skeleton variant="text" />)
							)}

							<div id="buttons">
								<Button
									variant="outlined"
									onClick={() => {
										window.open(
											process.env.REACT_APP_FILE_URL + resourceData.url
										);
									}}>
									??????
								</Button>
								<Button variant="outlined">????????????</Button>
								<Button variant="outlined">??????</Button>
								<Button variant="outlined">??????</Button>
							</div>
						</div>
					</Paper>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
