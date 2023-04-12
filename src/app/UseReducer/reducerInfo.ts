export type TabStateT = {
    amountType: string;
    entryType: string;
    initialized: boolean;
    orderSide: string;
    lastPrice: number | string;
    twinPrice: number | string;
    pickedPrice: {
      enabled: boolean;
      value: number | string;
    };
    ratioPercent: number | string;
    marginAmount: number | string;
    riskPercent: number | string;
    lotAmount: number | string;
    profitPercent: number;
    profitPip: number;
    lossPercent: number;
    lossPip: number;
    takeProfit: {
      enabled: boolean;
      value: number | string;
    };
    stopLoss: {
      enabled: boolean;
      value: number | string;
    };
    disableEditBtn: boolean;
  };

export enum TabActions {
    orderSide = 'ORDER_SIDE',
    entryType = 'ENTRY_TYPE',
    lastPrice = 'LAST_PRICE'
  }

export const tabInitialState: TabStateT = {
  amountType: 'volume',
  entryType: 'limit',
  lastPrice: '',
  twinPrice: '',
  orderSide: 'BUY',
  pickedPrice: {
    enabled: false,
    value: '',
  },
  ratioPercent: '',
  marginAmount: '',
  riskPercent: 0,
  lotAmount: '',
  takeProfit: {
    enabled: false,
    value: '',
  },
  stopLoss: {
    enabled: false,
    value: '',
  },
  disableEditBtn: true,
  profitPercent: 0,
  profitPip: 0,
  initialized: false,
  lossPercent: 0,
  lossPip: 0,
};

export function TabReducer(state: TabStateT, action: any): TabStateT {
  const defaultLotAmount = 0.1;

  switch (action.type) {
    case TabActions.orderSide: {
      const {
        val: orderSide,
        tabData: { pipDigit },
      } = action.payload;
      const pickedPrice = state.pickedPrice;
      let { takeProfit, stopLoss } = state;
      return {
        ...state,
        orderSide,
        takeProfit,
        stopLoss,
      };
    }
    case TabActions.entryType: {
      const {
        val: entryType,
        tabData: { pipDigit, type },
      } = action.payload;
      const { lastPrice } = state;
      let {
        stopLoss,
        takeProfit,
        profitPip,
        profitPercent,
        lossPip,
        lossPercent,
        pickedPrice,
        ratioPercent,
        lotAmount,
        initialized,
      } = state;

      if (entryType == 'market' && lastPrice && type == 'NEW') {
        if (!lotAmount && !initialized) {
          lotAmount = defaultLotAmount;
        }
        initialized = true;
        pickedPrice = { ...pickedPrice, value: lastPrice };
        ratioPercent = 0;
      }
      return {
        ...state,
        lastPrice,
        pickedPrice,
        lossPercent,
        profitPercent,
        ratioPercent,
        lotAmount,
        initialized,
        takeProfit,
        profitPip,
        stopLoss,
        lossPip,
        entryType,
        disableEditBtn: false,
      };
    }
    case TabActions.lastPrice: {
      const {
        lastPrice,
        twinPrice,
        tabData: { pipDigit, type },
      } = action.payload;

      const { entryType } = state;

      let {
        stopLoss,
        takeProfit,
        profitPip,
        profitPercent,
        lossPip,
        lossPercent,
        pickedPrice,
        ratioPercent,
        lotAmount,
        initialized,
      } = state;

      if (entryType == 'market' && lastPrice && type == 'NEW') {
        if (!lotAmount && !initialized) {
          lotAmount = defaultLotAmount;
        }
        pickedPrice = { ...pickedPrice, value: lastPrice };
        initialized = true;
      }

      return {
        ...state,
        lastPrice,
        twinPrice,
        pickedPrice,
        lossPercent,
        profitPercent,
        ratioPercent,
        lotAmount,
        initialized,
        takeProfit,
        profitPip,
        stopLoss,
        lossPip,
      };
    }
    default:
      return state;
  }
}
