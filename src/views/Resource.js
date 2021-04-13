import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Skeleton from "react-loading-skeleton";
import Pagination from "@material-ui/lab/Pagination";

import theme from "../assets/theme";
import { cardListClass } from "../assets/css";
import SimpleCard from "../component/SimpleCard";
import SelectControl from "../component/SelectControl";
import NoramlAppbar from "../component/NoramlAppbar";
import { getList } from "@/api/resourceApi";

export default function Resource() {
	const classes = cardListClass();
	const [cardData, setCardData] = useState([]);
	const [skeleton, setSkeleton] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [now, setNow] = useState(1);
	const [page, setPage] = useState(1);
	const [param, setParam] = useState({
		size: 10,
		sort: "0",
		order: "0",
		type: "0"
	});

	useEffect(() => {
		getList({
			page: 0,
			size: 10
		})
			.then((res) => {
				setCardData(res.data);
				setPage(Math.ceil(res.total / 10));
				setSkeleton([]);
			})
			.catch(function (res) {});
	}, []);

	const pageChange = (event, value) => {
		setNow(value);
		setCardData([]);
		setSkeleton([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		getList(
			Object.assign(
				{
					page: value - 1
				},
				param
			)
		)
			.then((res) => {
				setCardData(res.data);
				setPage(Math.ceil(res.total / 10));
				setSkeleton([]);
			})
			.catch(function (res) {});
	};

	const sortChange = () => {
		setCardData([]);
		setSkeleton([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		getList(param)
			.then((res) => {
				setCardData(res.data);
				setPage(Math.ceil(res.total / 10));
				setSkeleton([]);
			})
			.catch(function (res) {});
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
				<SelectControl reload={sortChange} data={param} setData={_setParam} />
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
						count={page}
						page={now}
						onChange={pageChange}
					/>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
