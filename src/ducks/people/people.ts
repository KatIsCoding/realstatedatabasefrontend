import peopleData from '../../mocks/people.js';

export const LOADPEOPLE = 'redux/actions/TESTME';


export const loadPeople = () => ({type: LOADPEOPLE});

const initialState = {
  peopleList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case LOADPEOPLE:
      return {
        ...state,
        peopleList: peopleData.people,
      };
    default:
      return state;
  }
}