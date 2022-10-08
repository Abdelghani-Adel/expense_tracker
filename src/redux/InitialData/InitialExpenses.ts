import Transaction from "../../interfaces/Transaction";

const InitialExepses = {
  transactions: <Transaction>{
    1: {
      id: 1,
      amount: 400,
      category: "Car",
      description: "Filling my car",
      date: "10/2/2022",
    },
    2: {
      id: 2,
      amount: 250,
      category: "Market",
      description: "Buying fruites from the market",
      date: "10/3/2022",
    },
    3: {
      id: 3,
      amount: 150,
      category: "Shopping",
      description: "Amazon",
      date: "10/3/2022",
    },
    4: {
      id: 4,
      amount: 320,
      category: "Market",
      description: "Buying Vegetables from the Market",
      date: "10/3/2022",
    },
  },
  categories: ["Car", "Home", "Market", "Shopping"],
};

export default InitialExepses;
