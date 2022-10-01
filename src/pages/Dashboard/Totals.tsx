const Totals = () => {
  return (
    <div className="row g-3 mt-3">
      <h2 className="text-center fw-bolder">Total Amounts</h2>
      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-success">
          <h3 className="text-secondary fw-bold">Income</h3>
          <p className="display-4 fw-bolder">50$</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-danger">
          <h3 className="text-secondary fw-bold">Expenses</h3>
          <p className="display-4 fw-bolder">10$</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-primary">
          <h3 className="text-secondary fw-bold">Balance</h3>
          <p className="display-4 fw-bolder">10$</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="border border-2 rounded p-2 text-success">
          <h3 className="text-secondary fw-bold">Savings</h3>
          <p className="display-4 fw-bolder">10$</p>
        </div>
      </div>
    </div>
  );
};

export default Totals;