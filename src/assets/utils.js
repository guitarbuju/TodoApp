

export const setItemToLocalStorage = (key,value) =>{
  const storedValue = localStorage.setItem(key, JSON.stringify(value))
  return storedValue
}

export const getItemFromLocalStorage = (key) =>{
   const retrievedValue = localStorage.getItem(key)
   return retrievedValue


}