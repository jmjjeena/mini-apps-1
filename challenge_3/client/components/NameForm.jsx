var NameForm  = function (props) {
  return(
    <div>
      <h1>Account Information</h1>
      <form>
        <p>
          <label>Full Name
            <input
              type="text"
              id="fname"
              name="fullname"
              placeholder="Name..."
            />
          </label>
        </p>
        <p>
          <label>Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@example.com"
              required
            />
          </label>
        </p>
        <p>
          <label>Password
            <input
              type="password"
              id="pass"
              name="password"
              required
            />
          </label>
        </p>
        <div>
          <button data-next="AddressForm" onClick={props.handleClick}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default NameForm;