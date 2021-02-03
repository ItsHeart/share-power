import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import { emphasize, withStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import { useHistory } from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.grey[100],
		height: theme.spacing(3),
		color: theme.palette.grey[800],
		fontWeight: theme.typography.fontWeightRegular,
		"&:hover, &:focus": {
			backgroundColor: theme.palette.grey[300],
		},
		"&:active": {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(theme.palette.grey[300], 0.12),
		},
	},
}))(Chip);

export default function SimpleCard(props) {
	let content;
	if (props.content.length > 50) {
		content = props.content.substr(0, 50) + "...";
	}

	const history = useHistory();
	const detail = () => {
		history.push({
			pathname: "/Detail",
			params: {},
		});
	};

	return (
		<Card theme={theme} onClick={() => detail()}>
			<CardActionArea>
				<CardMedia
					image={props.image}
					style={{ height: 0, paddingTop: "56.25%" }}
				/>
				<CardContent>
					<Breadcrumbs aria-label="breadcrumb">
						<StyledBreadcrumb component="a" href="#" label={props.title[0]} />
						<StyledBreadcrumb component="a" href="#" label={props.title[1]} />
						<StyledBreadcrumb component="a" href="#" label={props.title[2]} />
					</Breadcrumbs>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						style={{ paddingTop: "5px" }}>
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions style={{ height: "50px" }}>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon style={{ color: theme.palette.secondary.main }} />
				</IconButton>

				<IconButton aria-label="add to favorites">
					<ThumbDownIcon style={{ color: theme.palette.primary.main }} />
				</IconButton>
			</CardActions>
		</Card>
	);
}
