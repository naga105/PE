import Button from "@mui/material/Button";
import ProductModal from "../../modal/ProductModal";
import { styled } from "@mui/material/styles";
import { getRemoveProduct } from "../../../utils/reducer/reducer";
import { productContext } from "../../../utils/hooks/productContext";
import {useContext } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export const Product = ({ index, product }) => {
  const { state, dispatch } = useContext(productContext);
  const handleClick = (e) => {
    dispatch(getRemoveProduct(state.product, product));
    console.log(getRemoveProduct(state.product, product));
  };
  return (
    <>
      <StyledTableCell>{product.id}</StyledTableCell>
      <StyledTableCell>{product.name}</StyledTableCell>
      <StyledTableCell>{product.gpa}</StyledTableCell>
      <StyledTableCell align="center">
        <ProductModal product={product} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <Button variant="contained" onClick={handleClick}>
          Delete
        </Button>
      </StyledTableCell>
    </>
  );
};
