import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Product } from "./Product";
import "./table.css";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.text.disabled,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TableList = ({ data }) => {
  return (
    <div className="p-4">
      <Table striped className="w-10 scroll-body">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ width: "20%" }}>ID</StyledTableCell>
            <StyledTableCell style={{ width: "20%" }}>Name</StyledTableCell>
            <StyledTableCell style={{ width: "20%" }}>GPA</StyledTableCell>
            <StyledTableCell style={{ width: "20%" }} align="center">
              Chỉnh sửa
            </StyledTableCell>
            <StyledTableCell align="center" style={{ width: "20%" }}>
              Xóa
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="scroll-body">
          {data.map((i, index) => (
            <TableRow
              className="h-10"
              sx={{ backgroundColor: "white" }}
              key={index}
            >
              <Product key={index} product={i} index={index} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default TableList;
