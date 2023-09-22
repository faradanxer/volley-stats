import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  // prepareHeaders:(headers,{getState}) =>{
  //     const token = (getState as RootState).auth.
  // }
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: ()=>({}),
})