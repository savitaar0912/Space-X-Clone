// eslint-disable-next-line
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'

export default configureStore({
    reducer: {
      user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
  