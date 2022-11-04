import AddProductModal from "../modal/AddProductModal";
import TableList from "./component/TableList";
import { useState, useContext, useMemo } from "react";
import { productContext } from "../../utils/hooks/productContext";

const TaskList = () => {
  const { state } = useContext(productContext);
  console.log(state.product);
  return (
    <div className="">
      <TableList data={state.product} />
      <AddProductModal />
    </div>
  );
};

export default TaskList;
