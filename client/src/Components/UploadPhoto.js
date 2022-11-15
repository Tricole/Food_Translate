import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function UploadPhoto(props) {
	const selectFile = useRef(null);
	const { chooseFile } = props;

	function addPhoto() {
		let value = selectFile.current.files;
		value = value["0"];
		chooseFile(value);
	}

	return (
		<>
			<form>
				<label for="chooseFile" />
				<input
					type="file"
					name="chooseFile"
					id="chooseFile"
					ref={selectFile}
					//   onChange={() => sendFileOver()}
				/>
			</form>
			<button name="chooseFile" onClick={() => addPhoto()}>
				Upload Photo
			</button>
		</>
	);
}
