import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import demoData from "../../MOCK_DATA.json";
import { useMemo } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const TanStackTable = () => {
  const data = useMemo(() => demoData, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    // {
    //   header: "Fist Name",
    //   accessorKey: "first_name",
    //   footer: "Fist Name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    //   footer: "Last Name",
    // },

    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "IP Address",
      accessorKey: "ip_address",
      footer: "IP Address",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#F2F2F2",
    },
    "&:hover": {
      backgroundColor: "#A8A8A8",
    },
    "&:last-child td, &:last-child th": {
      border: 1,
    },
  }));

  return (
    <Box width="90%" mx="auto" mb={3}>
      <Typography variant="h4" my={3} textAlign="center">
        React Table
      </Typography>

      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#D427AD", color: "white" }}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  sx={{ border: "2px solid #A8A8A8" }}
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      sx={{ color: "white", fontSize: "1 rem" }}
                      key={header.id}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows?.map((row) => (
                <StyledTableRow
                  sx={{ border: "2px solid #A8A8A8" }}
                  key={row.id}
                >
                  {row.getVisibleCells()?.map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2}>
          <Button
            onClick={() => table.setPageIndex(0)}
            sx={{ mr: 2 }}
            variant="contained"
            color="secondary"
          >
            first Page
          </Button>
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            sx={{ mr: 2 }}
            variant="contained"
            color="secondary"
          >
            Previous Page
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            sx={{ mr: 2 }}
            variant="contained"
            color="secondary"
          >
            Next Page
          </Button>
          <Button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            sx={{ mr: 2 }}
            variant="contained"
            color="secondary"
          >
            Last Page
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TanStackTable;
