import axios from "@/assets/axios";

export const getList = (param) => {
	return axios.post(
		process.env.REACT_APP_BACKEND_URL + "resources/getList",
		param
	);
};
