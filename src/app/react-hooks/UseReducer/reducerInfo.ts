type StateT = {
  number: number;
  text: string;
};

type IncreaseAction = {
  type: ActionsType.increase;
};

type DecreaseAction = {
  type: ActionsType.decrease;
};

type TextChangeAction = {
  type: ActionsType.textChange;
  payload: string;
};

type ActionT = IncreaseAction | DecreaseAction | TextChangeAction;

export enum ActionsType {
  increase = "INCREASE",
  decrease = "DECREASE",
  textChange = "TEXT_CHANGE",
}

export const myInitialState: StateT = {
  number: 0,
  text: "",
};

export function myReducer(state: StateT, action: ActionT): StateT {
  switch (action.type) {
    case ActionsType.increase: {
      const { number } = state;
      return { ...state, number: number + 1 };
    }
    case ActionsType.decrease: {
      const { number } = state;
      return { ...state, number: number - 1 };
    }
    case ActionsType.textChange: {
      const { payload } = action;
      return { ...state, text: payload };
    }
    default:
      return state;
  }
}
