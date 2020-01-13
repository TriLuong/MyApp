import produce from 'immer';

export default (initialState: any, handlers: any) => (
  state = initialState,
  action: any,
) => {
  if (handlers[action.type] !== undefined) {
    return produce(state, (draftState: any) =>
      handlers[action.type](draftState, action),
    );
  }
  return state;
};
