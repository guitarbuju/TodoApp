import { createContext, useState } from "react";
import BASE_URL from './config'
import axios from "axios";

export const ListContext = createContext('');

export const ListContextProvider = ({ children }) => {

    const [List, setList] = useState('')
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    
    const daList = async () => {
   
        const requestedOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
         ` ${BASE_URL}/${user}`,
          requestedOptions
        );
        const data = await response.data;
        const sortedList = data.sort((a, b) => b - a).reverse();
    
        setList(sortedList);
      };

    return <ListContext.Provider value={List}>{children}</ListContext.Provider>
};
