export interface LoginRequest {}
export type DecodedUser = {
  username: string;
};
export type UserData = {
  username: string;
  [key: string]: any;
};

export interface Wager {
  betAmount: number;
  wagersTime: string;
  operatorApiRequests: object;
  wagerId: string;
  winloseAmount: number;
  spins: any[];
  status: string;
}

export interface User {
  username: string;
  userToken: string;
  balance: number;
  currency: string;
  wagers?: Wager[];
}

export type Headers = {
  [header: string]: string | boolean;
};


export type UpdateFieldsType = {
  userToken: string;
  balance: number;
  currency: string;
  wagers?: Wager[] | undefined;
  [key: string]: string | number | Wager[] | undefined;
};

export interface WagerRequest {
  betAmount: number;
  userToken: string;
}

export type Spin = {
  cascades: any[][];
  balance?: number;
  triggerFreeSpin: boolean;
};

export interface OperatorApiRequest {
  reqId: string;
  type: string;
  statusId: string;
  errorCode: number;
  message: string;
  insertDate: string;
}

export interface OperatorResponse {
  status: number;
  data: any;
}
