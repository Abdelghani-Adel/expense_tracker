const AddExpense = () => {
  return (
    <form className="row g-3 align-items-end">
      <h3>Adding New Expense</h3>

      <div className="col-md-3">
        <label className="form-label">Description</label>
        <input type="text" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">Amount</label>
        <input type="text" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">Category</label>
        <select className="form-select">
          <option value="">Food</option>
          <option value="">Car</option>
          <option value="">Gym</option>
        </select>
      </div>

      <div className="col-md-3">
        <button className="btn btn-danger">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpense;
