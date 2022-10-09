import Transaction from "../../interfaces/Transaction";

const InitialIncomes = {
  transctions: <Transaction>{
    "0": {
      id: 0,
      amount: 7040,
      category: "Salary",
      description: "Salary from the company",
      date: "10/2/2022",
    },
    "1": {
      id: 1,
      amount: 2000,
      category: "Freelancing",
      description: "Salary from the company",
      date: "10/2/2022",
    },
    "2": {
      id: 2,
      amount: 1000,
      category: "Freelancing",
      description: "Salary from the company",
      date: "10/2/2022",
    },
  },
  categories: ["Salary", "Freelancing"],
};

export default InitialIncomes;
