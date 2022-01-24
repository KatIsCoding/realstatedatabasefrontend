export const TESTME = 'redux/actions/TESTME';

export const executeTest = () => ({type: TESTME});

const initialState = {
  timesTested: 0
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case TESTME:
      console.log("I was tested bro");
      return {
        ...state,
        timesTested: state.timesTested + 1
      };
    default:
      return state;
  }
}