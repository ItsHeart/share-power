import Axios from "axios";

const axios = Axios.create();

axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";

axios.interceptors.request.use((config) => {
	if (config.method === "post") {
		config.data = JSON.stringify(config.data);
	}
	return config;
});

axios.interceptors.response.use(
	(response) => {
		let data = response.data;
		response.data = data.data;
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default axios;
