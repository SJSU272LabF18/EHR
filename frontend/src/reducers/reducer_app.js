const initialStore = {
    authFlag: false,
    errormsg:"",
   
}

export default function (state = initialStore,action){
            if(action.type === "LOGIN" && action.statusCode == 200){
                return {
                    ...state,
                    authFlag :true
                }
            }
            if(action.type === "LOGIN" && action.statusCode == 403){
                return {
                    ...state,
                    authFlag :false,
                    errormsg : action.payload.data
                }
            }
            if(action.type === "SIGNUP" && action.statusCode == 200){
                return {
                    ...state,
                    authFlag :true,     
                }
            }
            if(action.type === "SIGNUP" && action.statusCode == 403){
                return {
                    ...state,
                    authFlag :false,
                    errormsg : action.payload.data
                }
            }

          

        return state;
}