import peopleData from '../../mocks/people.js';
import { peopleType } from '../../types/';

export const LOADPEOPLE = 'redux/actions/TESTME';
export const SETCURRENTPERSON = 'redux/actions/SETCURRENTPERSON';


export const setCurrentPerson = (person: peopleType) => ({type: SETCURRENTPERSON, payload: person});
export const loadPeople = () => ({type: LOADPEOPLE});

const initialState = {
  peopleList: [],
  currentPerson: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case LOADPEOPLE:
      return {
        ...state,
        peopleList: peopleData.people,
      };
    case SETCURRENTPERSON:
      return {
        ...state,
        currentPerson: action.payload,
      };
    default:
      return state;
  }
}