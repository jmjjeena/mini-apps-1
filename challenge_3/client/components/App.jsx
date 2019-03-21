import CheckOutForm from './CheckOutForm.js';
import NameForm from './NameForm.js'
import AddressForm from './AddressForm.js'
import PaymentForm from './PaymentForm.js'
import ConfirmationForm  from './ConfirmationForm.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: ""
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
        <h1>Happy Shopping!</h1>
        {this.state.currentPage === "" && <button data-next="CheckOutForm" onClick ={this.handleClick}>Make Payment</button> }
        {this.state.currentPage === "CheckOutForm" && <CheckOutForm handleClick = {this.handleClick}/> }
        {this.state.currentPage === "NameForm" && <NameForm handleClick = {this.handleClick}/> }
        {this.state.currentPage === "AddressForm" && <AddressForm handleClick = {this.handleClick}/> }
        {this.state.currentPage === "PaymentForm" && <PaymentForm handleClick= {this.handleClick}/> }
        {this.state.currentPage === "ConfirmationForm" && <ConfirmationForm handleClick = {this.handleClick}/> }
      </div>
    )
  }
}

export default App;
