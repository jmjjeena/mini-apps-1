import NameForm from './NameForm.js'
import AddressForm from './AddressForm.js'
import PaymentForm from './PaymentForm.js'
import ConfirmationForm  from './ConfirmationForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:undefined,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentPage) {
    this.setState({currentPage: currentPage})
    // console.log('page:' currentpage)
  }

  render () {
    // if(this.state.currentPage === 0) {
    //   return (<Check)
    // }
    return (
      <div>
        <form>
          <div>
            <h1>PROCEED TO CHECKOUT</h1>
          </div>
          <div>
            <input onClick ={this.handleCheckout}
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
          <ConfirmationForm />
        </div>
      </div>
    )
  }
}

export default App;
