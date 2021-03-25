import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { homeClass, cardListClass } from "@/assets/css";
import theme from "@/assets/theme";
import SimpleCard from "@/component/SimpleCard";
import FullSearch from "@/component/FullSearch";
import ExploreMune from "@/component/ExploreMune";
import { getList } from "@/api/resourceApi";

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });
	return (
		<Slide appear={false} direction="down" in={trigger}>
			{children}
		</Slide>
	);
}

//参数检测
HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};

export default function Home() {
	const cardClasses = cardListClass();
	const homeClasses = homeClass();
	const [cardData, setCardData] = useState([]);

	useEffect(() => {
		getList({
			page: 0,
			size: 5
		})
			.then((res) => {
				setCardData(res.data);
			})
			.catch(function (res) {});
	}, []);

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<HideOnScroll>
					<AppBar>
						<Toolbar className={homeClasses.toolbar}>
							<Typography variant="h5">
								<Box fontWeight="fontWeightLight" color="white">
									Share Power
								</Box>
							</Typography>
							<Button size="large">Login</Button>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				<div className={homeClasses.top}>
					<Typography variant="h5">
						<Box fontWeight="fontWeightLight" color="white">
							Share Power
						</Box>
					</Typography>
					<div>
						<ExploreMune></ExploreMune>
						<Button size="large">Login</Button>
					</div>
				</div>

				<div className={homeClasses.main}>
					<Typography variant="h2" id="bigTitle">
						<Box>
							Let's Share <font color="#ff5722">Power</font>
						</Box>
					</Typography>
					<FullSearch padding="2" iconPadding="10px" />
				</div>

				<div className={cardClasses.root}>
					<GridList cellHeight={600} spacing={15} cols={5}>
						{cardData.map((card) => (
							<GridListTile key={card.id} cols={card.cols || 1}>
								<SimpleCard data={card}></SimpleCard>
							</GridListTile>
						))}
					</GridList>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
