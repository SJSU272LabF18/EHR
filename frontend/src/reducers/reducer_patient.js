const initialStore = {
    patients: [],
    patientsPageCount: 0,
}

export default function(state = initialStore,action){
    
    if(action.type == "PATIENTS" && action.statusCode == 200){
        console.log(action.payload.data)
        return {
            ...state,
            patients : action.payload.patients,
            patientsPageCount: action.payload.totalPages
        }
    }
    if(action.type == "PATIENTS" && action.statusCode == 400){
        return {
            ...state,
            patients: []
        }
    }

    return state;
}