import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up'
                ? [...state.sort((a: any, b: any) => a.name.localeCompare(b.name))]
                : [...state.sort((a: any, b: any) => b.name.localeCompare(a.name))]

            // return action.payload === 'up'
            //     ? [...state.sort((a, b) => a.age - b.age)]
            //     : [...state.sort((a, b) => b.age - a.age)]
        }

        case 'check': {

            let filteredState = state.filter(el => el.age >= action.payload)
            console.log(filteredState)
            let sortedState = [...filteredState].sort((a: any, b: any) => a.name.localeCompare(b.name));
            console.log(sortedState);

            return sortedState
        }

        default:
            return state
    }
}
