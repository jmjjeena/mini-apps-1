var CheckOutForm = function(props) {
  return (
    <div>
      <div>
        <h1>PROCEED TO CHECKOUT</h1>
      </div>
      <button data-next="NameForm" className="checkout-btn" onClick={props.handleClick}>
        Check out
      </button>
    </div>
  )
}

export default CheckOutForm;