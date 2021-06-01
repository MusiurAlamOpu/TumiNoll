const IsSubscribed = (state = false, action) => {
  switch (action.type) {
    case "SUBSCRIBED":
      return !state;
    case "UNSUBSCRIBED":
      return !state;
    default:
      return state;
  }
};

export default IsSubscribed;
