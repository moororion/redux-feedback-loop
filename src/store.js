
const UPDATE_FEELING = 'UPDATE_FEELING';
const UPDATE_UNDERSTANDING = 'UPDATE_UNDERSTANDING';
const UPDATE_SUPPORT = 'UPDATE_SUPPORT';
const UPDATE_COMMENTS = 'UPDATE_COMMENTS';


export const updateFeeling = (feeling) => ({
  type: UPDATE_FEELING,
  payload: feeling,
});

export const updateUnderstanding = (understanding) => ({
  type: UPDATE_UNDERSTANDING,
  payload: understanding,
});

export const updateSupport = (support) => ({
  type: UPDATE_SUPPORT,
  payload: support,
});

export const updateComments = (comments) => ({
  type: UPDATE_COMMENTS,
  payload: comments,
});

const initialState = {
  formData: {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
  },
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FEELING:
      return { ...state, formData: { ...state.formData, feeling: action.payload } };
    case UPDATE_UNDERSTANDING:
      return { ...state, formData: { ...state.formData, understanding: action.payload } };
    case UPDATE_SUPPORT:
      return { ...state, formData: { ...state.formData, support: action.payload } };
    case UPDATE_COMMENTS:
      return { ...state, formData: { ...state.formData, comments: action.payload } };
    default:
      return state;
  }
};


import { createStore } from 'redux';
const store = createStore(feedbackReducer);

export default store;
