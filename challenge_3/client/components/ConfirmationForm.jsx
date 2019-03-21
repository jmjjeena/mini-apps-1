var ConfirmationForm = function() {
  return (
    <div>
      <form>
          <div>
            <h1>Finish Payment</h1>
          </div>
          <div>
            <input
              className="purchase-btn"
              type="button"
              value="Purchase"
            />
          </div>
        </form>
    </div>
  )
}

export default ConfirmationForm;