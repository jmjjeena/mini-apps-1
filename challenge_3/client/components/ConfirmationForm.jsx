var ConfirmationForm = function(props) {
  return (
    <div>
				<div>Name: </div>
				<div>Email: </div>
				<div>Password: </div>
				<div>Address Line1: </div>
				<div>Address Line2: </div>
				<div>City: </div>
				<div>State: </div>
				<div>Zip Code: </div>
				<div>Credit Card Number: </div>
				<div>Expiration Date: </div>
				<div>CVV: </div>
				<div>Billing Zip Code: </div>
				<button data-next="" onClick={props.handleClick}>Purchase</button>
			</div>
		)
}

export default ConfirmationForm;