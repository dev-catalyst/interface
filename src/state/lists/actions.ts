import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { TokenList } from '@pangolindex/token-lists'

export const fetchTokenList: Readonly<{
  pending: ActionCreatorWithPayload<{ url: string; requestId: string }>
  fulfilled: ActionCreatorWithPayload<{ url: string; tokenList: TokenList; requestId: string }>
  rejected: ActionCreatorWithPayload<{ url: string; errorMessage: string; requestId: string }>
}> = {
  pending: createAction('lists/fetchTokenList/pending'),
  fulfilled: createAction('lists/fetchTokenList/fulfilled'),
  rejected: createAction('lists/fetchTokenList/rejected')
}

export const acceptListUpdate = createAction<string>('lists/acceptListUpdate')
export const addList = createAction<string>('lists/addList')
export const removeList = createAction<string>('lists/removeList')
export const selectList = createAction<{ url: string; shouldSelect: boolean }>('lists/selectList')
