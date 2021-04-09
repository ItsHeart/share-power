import axios from "@/assets/axios";

export const uploadFile = (file) => {
	let formData = new FormData();
	formData.append("file", file);
	let config = {
		headers: {
			"Content-Type": "multipart/form-data"
		}
	};
	return axios.post(
		process.env.REACT_APP_File_URL + "upload/image",
		formData,
		config
	);
};
