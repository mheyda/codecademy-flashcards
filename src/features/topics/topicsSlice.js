import { createSlice } from '@reduxjs/toolkit';


// Slice
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizIdForTopic: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        }
    }
})


// Selectors
export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;