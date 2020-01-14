export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const request = query => {
  return {
    type: REQUEST,
    query: query
  };
};

export const success = json => {
  return {
    type: SUCCESS,
    payload: json
  };
};

export const fail = error => {
  return {
    type: FAIL,
    error: error
  };
};
