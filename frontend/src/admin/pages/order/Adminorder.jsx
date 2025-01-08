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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

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
        sx={{ marginBottom: "20px" }}
      >
        Admin Order Management
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Order
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Customer</b></TableCell>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
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
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(order.id)}
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
        <DialogTitle>{editingOrder ? "Edit Order" : "Add Order"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Customer Name"
            fullWidth
            margin="dense"
            value={newOrder.customer}
            onChange={(e) =>
              setNewOrder((prev) => ({ ...prev, customer: e.target.value }))
            }
          />
          <TextField
            label="Product"
            fullWidth
            margin="dense"
            value={newOrder.product}
            onChange={(e) =>
              setNewOrder((prev) => ({ ...prev, product: e.target.value }))
            }
          />
          <Select
            value={newOrder.status}
            fullWidth
            margin="dense"
            onChange={(e) =>
              setNewOrder((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <MenuItem value="Ongoing">Ongoing</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminOrder;
