var AddressForm = function (props) {
  return(
    <div>
      <h1>Billing Address</h1>
      <form>
        <p>
          <label>Line 1
            <input
              type="text"
              id="line-one"
              name="lineOne"
              placeholder="Line 1.."
              required
            />
          </label>
        </p>
        <p>
          <label>Line 2
            <input
              type="text"
              id="line-two"
              name="lineTwo"
              placeholder="Line 2.."
            />
          </label>
        </p>
        <p>
          <label>City
            <input
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              required
            />
          </label>
        </p>
        <p>
          <label>State
            <input
              type="text"
              id="state"
              name="state"
              placeholder="NY"
              required
            />
          </label>
        </p>
        <p>
          <label>Zip
            <input
              type="number"
              id="zip"
              name="zip"
              placeholder="10001"
              required
            />
          </label>
        </p>
        <p>
          <label>Phone Number
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="012-345-6789"
              required
            />
          </label>
        </p>
        <div>
          <button data-next="PaymentForm" onClick={props.handleClick}>Next</button>
        </div>
    </form>
  </div>
  )
}

export default AddressForm;