import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Skeleton from "react-loading-skeleton";
import Pagination from "@material-ui/lab/Pagination";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import theme from "../assets/theme";
import { cardListClass } from "../assets/css";
import SimpleCard from "../component/SimpleCard";
import SelectControl from "../component/SelectControl";
import NoramlAppbar from "../component/NoramlAppbar";
import { getList } from "@/api/resourceApi";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Resource(props) {
	const classes = cardListClass();
	const [cardData, setCardData] = useState([]);
	const [skeleton, setSkeleton] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [param, setParam] = useState({
		sort: "0",
		order: "0",
		type: props.location.params ? props.location.params.type : "0",
		text: props.location.params ? props.location.params.text : ""
	});
	const [page, setPage] = useState({
		page: 0,
		size: 10,
		total: 1
	});
	//由于放到对象里，下一页按钮无法set成功，因此单独拿出来
	const [now, setNow] = useState(1);
	const [empty, setEmpty] = useState(false);

	useEffect(() => {
		setCardData([]);
		setSkeleton([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		getList(
			Object.assign(page, param, {
				type: props.location.params ? props.location.params.type : "0",
				text: props.location.params ? props.location.params.text : ""
			})
		)
			.then((res) => {
				setCardData(res.data);
				setPage({ ...page, total: Math.ceil(res.total / 10) });
				setSkeleton([]);
				if (!res.data.length) {
					setEmpty(true);
				}
			})
			.catch(function (res) {});
		// eslint-disable-next-line
	}, [param, page.page, props.location.params]);

	const pageChange = (event, value) => {
		setNow(value);
		setPage({ ...page, page: value - 1 });
	};

	const _setParam = (key, value) => {
		setParam((o) => {
			let n = Object.assign({}, o);
			n[key] = value;
			return n;
		});
	};

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NoramlAppbar />
				<SelectControl data={param} setData={_setParam} />
				<div className={classes.root}>
					<GridList cellHeight={320} spacing={10} cols={5}>
						{cardData.map((card) => (
							<GridListTile key={card.id} cols={1}>
								<SimpleCard data={card}></SimpleCard>
							</GridListTile>
						))}
						{skeleton.map((id) => (
							<GridListTile key={id} cols={1}>
								<Skeleton height={320} />
							</GridListTile>
						))}
					</GridList>

					<Pagination
						variant="outlined"
						shape="rounded"
						className={classes.pagination}
						count={page.total}
						page={now}
						onChange={pageChange}
					/>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={empty}
					onClose={() => {
						setEmpty(false);
					}}>
					<Alert
						onClose={() => {
							setEmpty(false);
						}}
						severity="warning">
						搜索结果为空
					</Alert>
				</Snackbar>
			</ThemeProvider>
		</React.Fragment>
	);
}
