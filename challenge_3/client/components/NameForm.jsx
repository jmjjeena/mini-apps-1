var NameForm  = function () {
  return(
    <div>
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
          <button>Next</button>
        </div>
      </form>
    </div>
  )
}

export default NameForm;