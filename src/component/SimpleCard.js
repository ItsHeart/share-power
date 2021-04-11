import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

import { transformDate } from "@/assets/commonApi";

const useStyles = makeStyles(() => ({
	root: {
		width: 300,
		margin: "auto",
		boxShadow: "none",
		borderRadius: 0
	},
	content: {
		padding: 24
	},
	more: {
		marginTop: 24,
		textTransform: "initial"
	}
}));

export const SimpleCard = React.memo(function NewsCard(props) {
	const styles = useStyles();
	const mediaStyles = useWideCardMediaStyles();
	const textCardContentStyles = useN01TextInfoContentStyles();
	const shadowStyles = useBouncyShadowStyles();
	const history = useHistory();
	const data = props.data;
	const detail = () => {
		history.push({
			pathname: "/Detail/" + data.id,
			params: {}
		});
	};
	if (data.describe.length > 45) {
		data.describe = data.describe.substr(0, 45) + "...";
	}
	if (data.cover.indexOf("http") === -1) {
		data.cover = process.env.REACT_APP_IMAGE_URL + data.cover;
	}
	return (
		<Card className={(styles.root, shadowStyles.root)}>
			<CardMedia classes={mediaStyles} image={data.cover} />
			<CardContent className={styles.content}>
				<TextInfoContent
					classes={textCardContentStyles}
					overline={transformDate(data.publishTime)}
					heading={data.title}
					body={data.describe}
				/>
				<Button
					color={"primary"}
					fullWidth
					className={styles.more}
					onClick={() => detail()}>
					了解更多
					<ChevronRightRounded />
				</Button>
			</CardContent>
		</Card>
	);
});

export default SimpleCard;
