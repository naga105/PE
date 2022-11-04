import { useState, useCallback, useMemo, useContext } from "react";
import { productContext } from "../../utils/hooks/productContext";
import { Button } from "@mui/material";
import { getAddProduct } from "../../utils/reducer/reducer";
import TextField from "@mui/material/TextField";
import "./modalStyle.css";
const AddProductModal = () => {
  const { state, dispatch } = useContext(productContext);
  const [input, setInput] = useState({
    id: "",
    name: "",
    gpa: "",
  });
  const isInformationFilled = useMemo(() => {
    const isAllFilled = Object.keys(input).every((key) => {
      return input[key] !== "";
    });
    const isAllValid = state.product.every((e) => e.id !== input.id);

    return isAllFilled && isAllValid;
  }, [input]);
  console.log(isInformationFilled);
  const handleSubmit = (e) => {
    e.preventDefault();
    isInformationFilled
      ? dispatch(getAddProduct(input, state.product))
      : alert("invalid Information");
  };

  const handleChange = useCallback(
    (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
      console.log("rerender " + e.target.name);
    },
    [input]
  );
  return (
    <div className="addProduct">
      <h1 className="text-2xl">Add Student</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
        }}
      >
        <div className="pt-5">
          <TextField
            type="text"
            name="id"
            value={input.id}
            id="standard-basic"
            label="ID"
            onChange={handleChange}
            className="input-button"
          />
        </div>
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          <TextField
            type="text"
            name="name"
            id="outlined-size-small"
            label="NAME"
            value={input.name}
            onChange={handleChange}
            className="input-button"
          />
        </div>
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          <TextField
            type="number"
            name="gpa"
            id="standard-basic"
            label="GPA"
            value={input.gpa}
            onChange={handleChange}
            color="success"
            className="input-button"
          />
        </div>
        <div className="pt-5">
          <Button onClick={handleSubmit} style={{ color: "white" }}>
            Save
          </Button>
          <Button style={{ color: "white" }}> Cancel </Button>
        </div>
      </form>
    </div>
  );
};
export default AddProductModal;
