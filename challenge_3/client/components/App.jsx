import CheckOutForm from './CheckOutForm.js';
import NameForm from './NameForm.js'
import AddressForm from './AddressForm.js'
import PaymentForm from './PaymentForm.js'
import ConfirmationForm  from './ConfirmationForm.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "NameForm"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(e.target)
    e.preventDefault()
    console.log(e)
  }

  handleClick(e) {
    e.preventDefault()
    console.log('event', e.target.dataset.next);
    this.setState({currentPage: e.target.dataset.next})
  }

  render () {
    return (
      <div>
        {this.state.currentPage === "CheckoutForm" && <CheckOutForm onClick = {this.handleClick}/>}
        { this.state.currentPage === "NameForm" && <NameForm onClick = {this.handleClick}/> }
        { this.state.currentPage === "AddressForm" && <AddressForm onClick = {this.handleClick}/> }
        { this.state.currentPage === "PaymentForm" && <PaymentForm onClick = {this.handleClick}/> }
        { this.state.currentPage === "ConfirmationForm" && <ConfirmationForm onClick = {this.handleClick}/> }
      </div>
    )
  }
}

export default App;
