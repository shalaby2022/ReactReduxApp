import { ActionTypes } from "../actionTypes"

export type Action =
  | searchRepositoriesAction
  | searchRepositoriesSuccessAction
  | searchRepositoriesErrorAction

export interface searchRepositoriesAction {
  type: ActionTypes.search_repositories
}

export interface searchRepositoriesSuccessAction {
  type: ActionTypes.search_repositories_success
  payload: string[]
}

export interface searchRepositoriesErrorAction {
  type: ActionTypes.search_repositories_error
  payload: string
}
