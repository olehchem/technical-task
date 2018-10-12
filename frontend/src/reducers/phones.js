const initialState = {
  list: [
    {
      title: 'iPhone 7',
      description:
        'Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      color: 'black',
      price: '1100',
    },
    {
      title: 'Samsung Galaxy S7',
      description:
        'Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
      color: 'white',
      price: '1100',
    },
  ],
  activePhoneId: null,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
