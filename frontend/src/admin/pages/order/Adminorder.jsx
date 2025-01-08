import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { green, blue, red, orange } from "@mui/material/colors";

const AdminOrder = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", product: "Laptop", status: "Ongoing" },
    { id: 2, customer: "Jane Smith", product: "Smartphone", status: "Completed" },
    { id: 3, customer: "Mike Johnson", product: "Tablet", status: "Cancelled" },
  ]);

  const [open, setOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    customer: "",
    product: "",
    status: "Ongoing",
  });

  // Material-UI theme hook for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handlers
  const handleOpen = (order = null) => {
    setEditingOrder(order);
    setNewOrder(order || { customer: "", product: "", status: "Ongoing" });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    if (editingOrder) {
      setOrders((prev) =>
        prev.map((order) => (order.id === editingOrder.id ? newOrder : order))
      );
    } else {
      setOrders((prev) => [...prev, { ...newOrder, id: Date.now() }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          color: theme.palette.primary.main,
        }}
      >
        Admin Order Management
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
          sx={{
            backgroundColor: blue[500],
            "&:hover": { backgroundColor: blue[700] },
            boxShadow: 3,
          }}
        >
          Add Order
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: theme.palette.grey[200] }}>
            <TableRow>
              <TableCell><b>Customer</b></TableCell>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{
                  "&:hover": { backgroundColor: theme.palette.grey[100] },
                  transition: "background-color 0.3s",
                }}
              >
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    fullWidth
                    sx={{
                      backgroundColor:
                        order.status === "Ongoing"
                          ? green[200]
                          : order.status === "Completed"
                          ? blue[200]
                          : red[200],
                      "& .MuiSelect-icon": {
                        color: order.status === "Ongoing" ? green[700] : 
                               order.status === "Completed" ? blue[700] : red[700],
                      },
                    }}
                  >
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpen(order)}
                    sx={{
                      backgroundColor: green[100],
                      "&:hover": { backgroundColor: green[200] },
                      marginRight: 1,
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(order.id)}
                    sx={{
                      backgroundColor: red[100],
                      "&:hover": { backgroundColor: red[200] },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ backgroundColor: blue[500], color: "white" }}>
          {editingOrder ? "Edit Order" : "Add Order"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Customer Name"
            fullWidth
            margin="dense"
            value={newOrder.customer}
            onChange={(e) =>
              setNewOrder((prev) => ({ ...prev, customer: e.target.value }))
            }
            sx={{
              marginBottom: 2,
            }}
          />
          <TextField
            label="Product"
            fullWidth
            margin="dense"
            value={newOrder.product}
            onChange={(e) =>
              setNewOrder((prev) => ({ ...prev, product: e.target.value }))
            }
            sx={{
              marginBottom: 2,
            }}
          />
          <Select
            value={newOrder.status}
            fullWidth
            margin="dense"
            onChange={(e) =>
              setNewOrder((prev) => ({ ...prev, status: e.target.value }))
            }
            sx={{
              marginBottom: 2,
            }}
          >
            <MenuItem value="Ongoing">Ongoing</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" sx={{ fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            sx={{ fontWeight: "bold", backgroundColor: blue[600] }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminOrder;
