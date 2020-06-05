/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeTags = payload => ({ payload, type: CHANGE_TAGS });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {

  console.warn({action});

  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: action.payload.checked
          ? [...statePart.tags, action.payload.tag]
          : statePart.tags.filter(t => t !== action.payload.tag),
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
