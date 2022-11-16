import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
	width: 400,
	height: 400,
	facingMode: "user",
};
const Profile = (props) => {
	const [picture, setPicture] = useState("");
	const webcamRef = React.useRef(null);

	useEffect(() => {}, [picture]);

	const capture = React.useCallback(() => {
		const pictureSrc = webcamRef.current.getScreenshot();
		setPicture(pictureSrc);
		// console.log(props);
		// console.log("🌏", returnPhoto);
		props.selected(pictureSrc);
	});
	return (
		<div>
			<h2 className="mb-5 text-center">Take Photo</h2>
			<div>
				{picture === "" ? (
					<Webcam
						audio={false}
						height={400}
						ref={webcamRef}
						width={400}
						screenshotFormat="image/jpeg"
						videoConstraints={videoConstraints}
					/>
				) : (
					<img src={picture} />
				)}
			</div>
			<div>
				{picture !== "" ? (
					<button
						onClick={(e) => {
							e.preventDefault();
							setPicture();
							// console.log(picture);
						}}
						className="btn btn-primary"
					>
						Retake
					</button>
				) : (
					<button
						onClick={(e) => {
							e.preventDefault();
							capture();
						}}
						className="btn btn-danger"
					>
						Capture
					</button>
				)}
			</div>
		</div>
	);
};
export default Profile;
