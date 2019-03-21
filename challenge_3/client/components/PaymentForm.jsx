var PaymentForm = function() {
  return (
    <div>
      <h1>Card Information</h1>
      <form>
        <p>
          <label>Name on Card
            <input
              type="text"
              id="card-name"
              name="cardname"
              placeholder="Full Name.."
              required
            />
          </label>
        </p>
        <p>
          <label>Credit card number
            <input
              type="number"
              id="card-number"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
              required
            />
          </label>
        </p>
        <p>
          <label>Exp date
            <input
              type="date"
              id="date"
              name="expdate"
              // value="2017-06-01"
              required
            />
          </label>
        </p>
        <p>
          <label>CVV
            <input
              type="number"
              id="cvv"
              name="cvv"
              placeholder="000"
              required
            />
          </label>
        </p>
        <div>
          <button data-next="ConfirmationForm" onClick={props.handleClick}>Next</button>
        </div>
    </form>
  </div>
  )
}

export default PaymentForm;