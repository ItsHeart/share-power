import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import theme from "../assets/theme";
import { cardListClass } from "../assets/css";
import SimpleCard from "../component/SimpleCard";
import SelectControl from "../component/SelectControl";
import NoramlAppbar from "../component/NoramlAppbar";

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

export default function Resource() {
	const classes = cardListClass();
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NoramlAppbar />
				<SelectControl />
				<div className={classes.root}>
					<GridList cellHeight={400} spacing={10} cols={3}>
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
			</ThemeProvider>
		</React.Fragment>
	);
}
