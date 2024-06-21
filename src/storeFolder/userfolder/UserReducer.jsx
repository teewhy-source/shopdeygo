export const UserActionType = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };
  
   export const Userreducer = (state =  UserActionType , action) => {
    console.log("dispatch");
    console.log(action);
    const { type, payload } = action;
  
    switch (type) {
      case UserActionType.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: payload,
        };
  
      default:
        return state;
    }
  };