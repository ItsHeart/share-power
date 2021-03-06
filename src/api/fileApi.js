import axios from "@/assets/axios";

export const uploadImage = (file) => {
	let formData = new FormData();
	formData.append("file", file, file.name);
	return axios.post(
		process.env.REACT_APP_FILE_UPLOAD_URL + "upload/image",
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}
	);
};

export const uploadFile = (file) => {
	let formData = new FormData();
	formData.append("file", file, file.name);
	return axios.post(
		process.env.REACT_APP_FILE_UPLOAD_URL + "upload/file",
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}
	);
};
