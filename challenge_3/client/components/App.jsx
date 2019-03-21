import NameForm from './NameForm.js'
import AddressForm from './AddressForm.js'
import PaymentForm from './PaymentForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout(e) {
    alert('Proceed', this.state.value)
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <h1>PROCEED TO CHECKOUT</h1>
          </div>
          <div>
            <input onSubmit ={this.handleCheckout}
              className="checkout-btn"
              type="button"
              value="Checkout"
            />
          </div>
        </form>
        <div>
          <NameForm />
        </div>
        <div>
          <AddressForm />
        </div>
        <div>
          <PaymentForm />
        </div>
        <div>
          {/* <Confirmation /> */}
        </div>
      </div>
    )
  }
}

export default App;
