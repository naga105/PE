import { useReducer, useMemo } from "react";
import "./App.css";
import Home from "./components/home";
import { reducer } from "./utils/reducer/reducer";
import { productContext } from "./utils/hooks/productContext";

const App = () => {
  const initialState = {
    product: [
      { id: "1", name: "Nguyen nhat huy", gpa: 2.5 },
      { id: "2", name: "Nguyen nhat huy", gpa: 2.5 },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addReducer = useMemo(() => {
    return {
      state,
      dispatch,
    };
  });
  return (
    <productContext.Provider value={addReducer}>
      <div className="   pb-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Home />
      </div>
    </productContext.Provider>
  );
};

export default App;
