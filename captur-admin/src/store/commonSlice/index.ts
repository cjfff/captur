import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface CommonType {
  projectList: any[]
}

const initialState: CommonType = {
  projectList: [],
}

export const { reducer, actions } = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setProjectList(state, action: PayloadAction<any[]>) {
      return {
        ...state,
        projectList: action.payload,
      }
    },
  },
})

export default reducer
