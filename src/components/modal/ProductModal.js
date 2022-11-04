import { useState, useCallback, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getUpdateProduct } from "../../utils/reducer/reducer";
import { productContext } from "../../utils/hooks/productContext";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({ product }) => {
  const { dispatch, state } = useContext(productContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [input, setInput] = useState({
    id: product.id,
    name: product.name,
    gpa: product.gpa,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUpdateProduct(state.product, input));
    console.log(getUpdateProduct(state.product, input));
  };
  const handleChange = useCallback(
    (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
      console.log("rerender " + e.target.name);
    },
    [input]
  );
  return (
    <div className="">
      <Button variant="outlined" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                paddingBottom: "2rem",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Update Student
              </h1>
              <div>
                <TextField
                  type="text"
                  disabled
                  name="id"
                  value={input.id}
                  id="standard-basic"
                  label="ID"
                  variant="standard"
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="name"
                  id="standard-basic"
                  label="NAME"
                  variant="standard"
                  value={input.name}
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="gpa"
                  id="standard-basic"
                  label="GPA"
                  variant="standard"
                  value={input.gpa}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button onClick={handleSubmit}>Save</Button>
            <Button onClick={handleOpen}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default ProductModal;
