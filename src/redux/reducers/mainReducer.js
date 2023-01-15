import { NAIL_PRICES } from "../actions/actionTypes";

const initialState = {
	nailsPrices: [
		{
			name: "Neumodellage",
			price: "130",
			info: ["Polygel", "Tip oder Schablone", "Inkl. Steine & Design"],
		},
		{
			name: "Auffüllen",
			price: "90",
			info: ["Polygel", "Inkl. Steine & Design"],
		},
		{
			name: "Neumodellage Eigene Nägel",
			price: "100",
			info: ["Semipermanent Gel inkl. Steine & Design"],
		},
		{
			name: "Auffüllen Semipermanent Gel",
			price: "80",
			info: ["Inkl. Steine & Design"],
		},
		{
			name: "Reparatur pro Nagel",
			price: "5",
			info: ["Keine Fremdarbeit"],
		},
		{
			name: "Gelnägel entfernen",
			price: "25",
			info: ["Nagelhaut entfernen"],
		},
		{
			name: "Parrafin Wachsbad",
			price: "15",
			info: ["Diverse Wachsaromen"],
		},
	],
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case NAIL_PRICES:
			return {
				nailsPrices: state.nailsPrices,
			};

		default:
			return state;
	}
};

export default mainReducer;
