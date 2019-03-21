var NameForm = function (props) {
  return React.createElement("div", null, React.createElement("h1", null, "Account Information"), React.createElement("form", null, React.createElement("p", null, React.createElement("label", null, "Full Name", React.createElement("input", {
    type: "text",
    id: "fname",
    name: "fullname",
    placeholder: "Name..."
  }))), React.createElement("p", null, React.createElement("label", null, "Email", React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "xyz@example.com",
    required: true
  }))), React.createElement("p", null, React.createElement("label", null, "Password", React.createElement("input", {
    type: "password",
    id: "pass",
    name: "password",
    required: true
  }))), React.createElement("div", null, React.createElement("button", {
    "data-next": "AddressForm",
    onClick: props.handleClick
  }, "Next"))));
};

export default NameForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL05hbWVGb3JtLmpzeCJdLCJuYW1lcyI6WyJOYW1lRm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFFBQVEsR0FBSSxVQUFVQyxLQUFWLEVBQWlCO0FBQy9CLFNBQ0UsaUNBQ0Usc0RBREYsRUFFRSxrQ0FDRSwrQkFDRSxnREFDRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLEVBQUUsRUFBQyxPQUZMO0FBR0UsSUFBQSxJQUFJLEVBQUMsVUFIUDtBQUlFLElBQUEsV0FBVyxFQUFDO0FBSmQsSUFERixDQURGLENBREYsRUFXRSwrQkFDRSw0Q0FDRTtBQUNFLElBQUEsSUFBSSxFQUFDLE9BRFA7QUFFRSxJQUFBLEVBQUUsRUFBQyxPQUZMO0FBR0UsSUFBQSxJQUFJLEVBQUMsT0FIUDtBQUlFLElBQUEsV0FBVyxFQUFDLGlCQUpkO0FBS0UsSUFBQSxRQUFRO0FBTFYsSUFERixDQURGLENBWEYsRUFzQkUsK0JBQ0UsK0NBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxVQURQO0FBRUUsSUFBQSxFQUFFLEVBQUMsTUFGTDtBQUdFLElBQUEsSUFBSSxFQUFDLFVBSFA7QUFJRSxJQUFBLFFBQVE7QUFKVixJQURGLENBREYsQ0F0QkYsRUFnQ0UsaUNBQ0U7QUFBUSxpQkFBVSxhQUFsQjtBQUFnQyxJQUFBLE9BQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEvQyxZQURGLENBaENGLENBRkYsQ0FERjtBQXlDRCxDQTFDRDs7QUE0Q0EsZUFBZUYsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYW1lRm9ybSAgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QWNjb3VudCBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGxhYmVsPkZ1bGwgTmFtZVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZS4uLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGxhYmVsPkVtYWlsXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieHl6QGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmRcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3NcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLW5leHQ9XCJBZGRyZXNzRm9ybVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVGb3JtOyJdfQ==