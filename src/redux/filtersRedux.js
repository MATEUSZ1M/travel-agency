/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');

// action creators
export const changeSearchPhrase = (payload) => ({
  payload,
  type: CHANGE_PHRASE,
});
export const changeTags = (payload) => ({ payload, type: CHANGE_TAGS });
// TODO - add other action creators
export const changeDurationFrom = (payload) => ({
  payload,
  type: CHANGE_DURATION_FROM,
});

export const changeDurationTo = (payload) => ({
  payload,
  type: CHANGE_DURATION_TO,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  console.warn({ action });
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: action.payload.checked
          ? [...statePart.tags, action.payload.tag]
          : statePart.tags.filter((t) => t !== action.payload.tag),
      };

    // TODO - handle other action types
    default:
      return statePart;
  }
}

/*

  flaga = false;
  state.filters

  {
    ...state,
    filters: [
      ...state.filters,
      'xxx'
    ],
    
    // xxx: 'x12312'

    ...flaga && {xxx: 'x12312'}

  }

*/
