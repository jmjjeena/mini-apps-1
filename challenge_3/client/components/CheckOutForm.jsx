var CheckOutForm = function(props) {
  return (
    <div>
      <div>
        <h1>PROCEED TO CHECKOUT</h1>
      </div>
      <button className="checkout-btn" data-next="NameForm" onClick={props.handleClick}>
        Check out
      </button>
    </div>
  )
}

export default CheckOutForm;