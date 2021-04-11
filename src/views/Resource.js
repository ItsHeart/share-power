import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";

import theme from "../assets/theme";
import { cardListClass } from "../assets/css";
import SimpleCard from "../component/SimpleCard";
import SelectControl from "../component/SelectControl";
import NoramlAppbar from "../component/NoramlAppbar";
import { getList } from "@/api/resourceApi";

export default function Resource() {
	const classes = cardListClass();
	const [cardData, setCardData] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		getList({
			page: 0,
			size: 10
		})
			.then((res) => {
				setCardData(res.data);
			})
			.catch(function (res) {});
	}, []);

	const loadMore = () => {
		getList({
			page: page,
			size: 5
		})
			.then((res) => {
				setCardData((o) => {
					let n = o;
					n.concat(res.data);
					return n;
				});
				setPage(page + 1);
			})
			.catch(function (res) {});
	};

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NoramlAppbar />
				<SelectControl />
				<div className={classes.root}>
					<GridList cellHeight={350} spacing={10} cols={5}>
						{cardData.map((card) => (
							<GridListTile key={card.id} cols={card.cols || 1}>
								<SimpleCard data={card}></SimpleCard>
							</GridListTile>
						))}
					</GridList>
					<Button
						variant="outlined"
						className={classes.more}
						onClick={loadMore}>
						more
					</Button>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
