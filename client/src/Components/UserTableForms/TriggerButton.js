import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
	return (
		<a
			className="btn btn-lg btn-danger center modal-button"
			ref={buttonRef}
			onClick={showModal}
		>
			{}
		</a>
	);
};
export default Trigger;
