import React from "react";
import { browserHistory, IndexRoute} from 'react-router'
import { useParams, useSearchParams } from "react-router-dom";

const NotFound = ({match}) => {
    const params = useParams();
    const[searchParams, setSearchParams] = useSearchParams()
   console.log(params, match)
  return (
    <div className="flex flex-col items-center justify-center m-4 h-[100vh]">
      <p className="text-2xl font-semibold">404</p>
      <p>Error, Page not found!</p>
    </div>
  );
};

export default NotFound;
