import { NAIL_PRICES } from "../actions/actionTypes";

const initialState = {
  nailsPrices: [
    {
      name: "Neumodellage",
      price: "59",
      info: ["Polygel", "Tip oder Schablone", "Inkl. Steine & Design"],
    },
    {
      name: "Auffüllen",
      price: "55",
      info: ["Polygel", "Inkl. Steine & Design"],
    },
    {
      name: "Maniküre mit Gellack",
      price: "35",
      info: ["Nägel in Form feilen"],
    },
    {
      name: "Maniküre ohne Gellack",
      price: "20",
      info: ["Nägel in Form feilen"],
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
