export const OPENDIALOG = 'redux/actions/dialog/OPENDIALOG';

export const openDialog = (data: string) => ({type: OPENDIALOG, payload: data});

const initialState = {
  isOpen: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case OPENDIALOG:
      console.log("I was tested bro");
      return {
        ...state,
        isOpen: true,
      };
    default:
      return state;
  }
}