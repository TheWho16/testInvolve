import Noty from "noty";
import "./noty.css";

Noty.setMaxVisible(1);

export const noty = ({ layout = "topRight", text, type }) => {
	new Noty({
		layout,
		text,
		timeout: 1000,
		type
	}).show();
};



export const notyInfo = (text, opts) => noty({ ...opts, text, type: "info" });


