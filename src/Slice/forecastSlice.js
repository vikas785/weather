import {createSlice} from '@reduxjs/toolkit'

const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        report: [
            { night: 20, day: 25},
            { night: 30, day: 35},
            { night: 40, day: 45}
        ]
    }, 
    reducers:{
        updateReport: (state, action) => {
            const { index, newData } = action.payload;
            state.report[index] = { ...state.report[index], ...newData };
          },
        deleteReport: (state, action) => {
            const index = action.payload;
            state.report.splice(index, 1);
          }
    }     
})

export const {updateReport, deleteReport} = forecastSlice.actions
export default forecastSlice.reducer