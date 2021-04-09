import Axios from "axios";

const axios = Axios.create();

axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";

axios.interceptors.request.use((config) => {
	if (
		config.method === "post" &&
		config.headers["Content-Type"] !== "multipart/form-data"
	) {
		config.data = JSON.stringify(config.data);
	}
	return config;
});

axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default axios;
