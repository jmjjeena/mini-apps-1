import CheckOutForm from './CheckOutForm.js';
import NameForm from './NameForm.js';
import AddressForm from './AddressForm.js';
import PaymentForm from './PaymentForm.js';
import ConfirmationForm from './ConfirmationForm.js';

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
    console.log(e.target);
    e.preventDefault();
    console.log(e);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('event', e.target.dataset.next);
    this.setState({
      currentPage: e.target.dataset.next
    });
  }

  render() {
    return React.createElement("div", null, this.state.currentPage === "CheckoutForm" && React.createElement(CheckOutForm, {
      onClick: this.handleClick
    }), this.state.currentPage === "NameForm" && React.createElement(NameForm, {
      onClick: this.handleClick
    }), this.state.currentPage === "AddressForm" && React.createElement(AddressForm, {
      onClick: this.handleClick
    }), this.state.currentPage === "PaymentForm" && React.createElement(PaymentForm, {
      onClick: this.handleClick
    }), this.state.currentPage === "ConfirmationForm" && React.createElement(ConfirmationForm, {
      onClick: this.handleClick
    }));
  }

}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQ2hlY2tPdXRGb3JtIiwiTmFtZUZvcm0iLCJBZGRyZXNzRm9ybSIsIlBheW1lbnRGb3JtIiwiQ29uZmlybWF0aW9uRm9ybSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFBhZ2UiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZGF0YXNldCIsIm5leHQiLCJzZXRTdGF0ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsWUFBUCxNQUF5QixtQkFBekI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixrQkFBeEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGtCQUF4QjtBQUNBLE9BQU9DLGdCQUFQLE1BQThCLHVCQUE5Qjs7QUFHQSxNQUFNQyxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFdBQVcsRUFBRTtBQURGLEtBQWI7QUFJQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUVEQyxFQUFBQSxZQUFZLENBQUNDLENBQUQsRUFBSTtBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFkO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0ksY0FBRjtBQUNBSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEOztBQUVESCxFQUFBQSxXQUFXLENBQUNHLENBQUQsRUFBSTtBQUNiQSxJQUFBQSxDQUFDLENBQUNJLGNBQUY7QUFDQUgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsQ0FBQyxDQUFDRyxNQUFGLENBQVNFLE9BQVQsQ0FBaUJDLElBQXRDO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQUNYLE1BQUFBLFdBQVcsRUFBRUksQ0FBQyxDQUFDRyxNQUFGLENBQVNFLE9BQVQsQ0FBaUJDO0FBQS9CLEtBQWQ7QUFDRDs7QUFFREUsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsV0FDRSxpQ0FDRyxLQUFLYixLQUFMLENBQVdDLFdBQVgsS0FBMkIsY0FBM0IsSUFBNkMsb0JBQUMsWUFBRDtBQUFjLE1BQUEsT0FBTyxFQUFJLEtBQUtDO0FBQTlCLE1BRGhELEVBRUksS0FBS0YsS0FBTCxDQUFXQyxXQUFYLEtBQTJCLFVBQTNCLElBQXlDLG9CQUFDLFFBQUQ7QUFBVSxNQUFBLE9BQU8sRUFBSSxLQUFLQztBQUExQixNQUY3QyxFQUdJLEtBQUtGLEtBQUwsQ0FBV0MsV0FBWCxLQUEyQixhQUEzQixJQUE0QyxvQkFBQyxXQUFEO0FBQWEsTUFBQSxPQUFPLEVBQUksS0FBS0M7QUFBN0IsTUFIaEQsRUFJSSxLQUFLRixLQUFMLENBQVdDLFdBQVgsS0FBMkIsYUFBM0IsSUFBNEMsb0JBQUMsV0FBRDtBQUFhLE1BQUEsT0FBTyxFQUFJLEtBQUtDO0FBQTdCLE1BSmhELEVBS0ksS0FBS0YsS0FBTCxDQUFXQyxXQUFYLEtBQTJCLGtCQUEzQixJQUFpRCxvQkFBQyxnQkFBRDtBQUFrQixNQUFBLE9BQU8sRUFBSSxLQUFLQztBQUFsQyxNQUxyRCxDQURGO0FBU0Q7O0FBakMrQjs7QUFvQ2xDLGVBQWVQLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tPdXRGb3JtIGZyb20gJy4vQ2hlY2tPdXRGb3JtLmpzJztcbmltcG9ydCBOYW1lRm9ybSBmcm9tICcuL05hbWVGb3JtLmpzJ1xuaW1wb3J0IEFkZHJlc3NGb3JtIGZyb20gJy4vQWRkcmVzc0Zvcm0uanMnXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi9QYXltZW50Rm9ybS5qcydcbmltcG9ydCBDb25maXJtYXRpb25Gb3JtICBmcm9tICcuL0NvbmZpcm1hdGlvbkZvcm0uanMnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50UGFnZTogXCJOYW1lRm9ybVwiXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGUudGFyZ2V0LmRhdGFzZXQubmV4dCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6IGUudGFyZ2V0LmRhdGFzZXQubmV4dH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gXCJDaGVja291dEZvcm1cIiAmJiA8Q2hlY2tPdXRGb3JtIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30vPn1cbiAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09PSBcIk5hbWVGb3JtXCIgJiYgPE5hbWVGb3JtIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30vPiB9XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gXCJBZGRyZXNzRm9ybVwiICYmIDxBZGRyZXNzRm9ybSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Lz4gfVxuICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IFwiUGF5bWVudEZvcm1cIiAmJiA8UGF5bWVudEZvcm0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfS8+IH1cbiAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09PSBcIkNvbmZpcm1hdGlvbkZvcm1cIiAmJiA8Q29uZmlybWF0aW9uRm9ybSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Lz4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==