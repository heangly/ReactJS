import {useState, useEffect} from 'react';

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let val;
    try{
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    }
    catch(e){
      val = defaultValue;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorageState;