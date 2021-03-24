import axios from "@/assets/axios";

export const getList = (param) => {
	return axios.post(
		process.env.REACT_APP_BACKEND_URL + "resources/getList",
		param
	);
};

export const get = (id) => {
	return axios.get(
		process.env.REACT_APP_BACKEND_URL + "resources/get?id=" + id
	);
};
