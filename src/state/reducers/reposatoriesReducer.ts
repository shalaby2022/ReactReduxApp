import { ActionTypes } from "../actionTypes"
import { Action } from "./../actions/index"

export interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.search_repositories:
      return { loading: true, error: null, data: [] }
    case ActionTypes.search_repositories_success:
      return { data: action.payload, loading: false, error: null }
    case ActionTypes.search_repositories_error:
      return { error: action.payload, loading: false, data: [] }
    default:
      return state
  }
}

export default reducer
