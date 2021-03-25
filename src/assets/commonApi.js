export const transformDate = (param) => {
	let date = new Date(param);
	let monthStr = "";
	switch (date.getMonth()) {
		case 0:
			monthStr = "January ";
			break;
		case 1:
			monthStr = "February ";
			break;
		case 2:
			monthStr = "March ";
			break;
		case 3:
			monthStr = "April ";
			break;
		case 4:
			monthStr = "May ";
			break;
		case 5:
			monthStr = "June ";
			break;
		case 6:
			monthStr = "July ";
			break;
		case 7:
			monthStr = "August ";
			break;
		case 8:
			monthStr = "September ";
			break;
		case 9:
			monthStr = "October ";
			break;
		case 10:
			monthStr = "November ";
			break;
		case 11:
			monthStr = "December ";
			break;
	}
	return monthStr + date.getDate() + "," + date.getFullYear();
};
