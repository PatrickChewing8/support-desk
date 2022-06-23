import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ticketReducer from '../features/tickets/ticketSlice';
import noteSlice from '../features/notes/noteSlice';
import noteReducer from '../features/notes/noteSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		tickets: ticketReducer,
		notes: noteReducer,
	},
});
