import React, { Component } from "react";
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

import { homeClass, commonClass } from "../assets/css";
import theme from "../assets/theme";
import SimpleCard from "../component/SimpleCard";
import FullSearch from "../component/FullSearch";

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
	window: PropTypes.func,
};

var cardData = [
	{
		image:
			"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476__480.jpg",
		title: ["文章", "信息技术", "大数据"],
		content:
			"最早提出“大数据”时代到来的是全球知名咨询公司麦肯锡，麦肯锡称：“数据，已经渗透到当今每一个行业和业务职能领域，成为重要的生产因素。人们对于海量数据的挖掘和运用，预示着新一波生产率增长和消费者盈余浪潮的到来",
		cols: 1,
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2020/10/20/19/19/bubbles-5671365__340.jpg",
		title: ["文章", "信息技术", "大数据"],
		content:
			"最早提出“大数据”时代到来的是全球知名咨询公司麦肯锡，麦肯锡称：“数据，已经渗透到当今每一个行业和业务职能领域，成为重要的生产因素。人们对于海量数据的挖掘和运用，预示着新一波生产率增长和消费者盈余浪潮的到来",
		cols: 1,
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2020/12/28/18/32/mountains-5868127__340.jpg",
		title: ["文章", "信息技术", "大数据"],
		content:
			"最早提出“大数据”时代到来的是全球知名咨询公司麦肯锡，麦肯锡称：“数据，已经渗透到当今每一个行业和业务职能领域，成为重要的生产因素。人们对于海量数据的挖掘和运用，预示着新一波生产率增长和消费者盈余浪潮的到来",
		cols: 1,
	},
];

function HideAppBar() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<HideOnScroll>
					<AppBar>
						<Toolbar style={commonClass.spaceBetween}>
							<Typography variant="h5" style={homeClass.whiteColor}>
								<Box fontWeight="fontWeightLight">Share Power</Box>
							</Typography>
							<Button size="large" style={homeClass.whiteColor}>
								Login
							</Button>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				<div style={homeClass.mainContent}>
					<Typography variant="h5" style={homeClass.whiteColor}>
						<Box fontWeight="fontWeightLight">Share Power</Box>
					</Typography>
					<div style={commonClass.spaceBetween}>
						<Button size="large" style={homeClass.whiteColor}>
							Login
						</Button>
					</div>
				</div>
			</ThemeProvider>

			<div style={homeClass.mian}>
				<Typography variant="h2" style={homeClass.bigTitle}>
					<Box>
						Let's Share <font color="#ff5722">Power</font>
					</Box>
				</Typography>
				<FullSearch></FullSearch>
			</div>

			<div style={homeClass.root}>
				<GridList
					cellHeight={400}
					spacing={10}
					style={homeClass.gridList}
					cols={3}>
					{cardData.map((card) => (
						<GridListTile key={card.image} cols={card.cols || 1}>
							<SimpleCard
								image={card.image}
								title={card.title}
								content={card.content}></SimpleCard>
						</GridListTile>
					))}
				</GridList>
			</div>
		</React.Fragment>
	);
}

export default class Home extends Component {
	render() {
		return HideAppBar();
	}
}
