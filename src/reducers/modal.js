
const initialState={
    showModal: false,
    toCreate: false,
    toDelete: false,
    toUpdate: false
}

export default function(state = initialState, action){
    if(action.type ==='CHANGE_STATE'){
        return Object.assign({}, state,{
                showModal:[
                    ...state.showModal,{
                        showModal:action.showModal
                    }
                ],toCreate:[
                    ...state.toCreate,{
                        toCreate: action.toCreate
                    }
                ],toDelete:[
                    ...state.toDelete,{
                        toDelete: action.toDelete
                    }
                ],toUpdate:[
                    ...state.toUpdate,{
                        toUpdate: action.toUpdate
                    }
                ],

        })
            
        
    }return state
}