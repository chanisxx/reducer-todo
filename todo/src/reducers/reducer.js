
export const initialState =[
    {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589897
    },
    {
    task: 'Create To do App',
    id: 1528817084359,
    completed: false
    },
    {
    task: 'Finish Project',
    id: 1528817077286,
    completed: false
    },
    {
    task: 'Study',
    id: 1528817084358,
    completed: false
    },
    {
    task: 'Walk Dog',
    id: 1528817084355,
    completed: false
    }
]

export const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'new_todo':
            const newItem = {
                task: action.payload,
                id: Date.now(),
                completed: false
            }
            return [
                ...state,
                newItem 
            ]
        case 'toggle':
            return [
                ...state.map(item => action.payload === item.id ? {...item, completed: !item.completed} : item)
            ]
        case 'completed':
            return [
                ...state.filter(item => !item.completed)
            ]

        default: return state;
    }
}