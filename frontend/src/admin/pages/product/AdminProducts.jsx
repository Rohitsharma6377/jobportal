import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Switch,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, hidden: false },
    { id: 2, name: "Product 2", price: 200, hidden: false },
    { id: 3, name: "Product 3", price: 300, hidden: false },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [editingProduct, setEditingProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        {
          id: Date.now(),
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          hidden: false,
        },
      ]);
      setNewProduct({ name: "", price: "" });
      setSnackbarOpen(true);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setOpenDialog(true);
  };

  const handleUpdateProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === editingProduct.id
          ? { ...editingProduct, price: parseFloat(editingProduct.price) }
          : p
      )
    );
    setEditingProduct(null);
    setOpenDialog(false);
    setSnackbarOpen(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    setSnackbarOpen(true);
  };

  const toggleProductVisibility = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, hidden: !p.hidden } : p
      )
    );
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Product Management
      </Typography>

      {/* Add / Edit Product */}
      <Box mb={4} display="flex" justifyContent="center" gap={2}>
        <TextField
          label="Product Name"
          value={editingProduct ? editingProduct.name : newProduct.name}
          onChange={(e) =>
            editingProduct
              ? setEditingProduct({ ...editingProduct, name: e.target.value })
              : setNewProduct({ ...newProduct, name: e.target.value })
          }
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          value={editingProduct ? editingProduct.price : newProduct.price}
          onChange={(e) =>
            editingProduct
              ? setEditingProduct({ ...editingProduct, price: e.target.value })
              : setNewProduct({ ...newProduct, price: e.target.value })
          }
          fullWidth
        />
        {editingProduct ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateProduct}
            sx={{ height: "100%" }}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={handleAddProduct}
            sx={{ height: "100%" }}
          >
            Add
          </Button>
        )}
      </Box>

      {/* Product Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Hidden</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  opacity: product.hidden ? 0.5 : 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Switch
                    checked={product.hidden}
                    onChange={() => toggleProductVisibility(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditProduct(product)}
                    sx={{
                      "&:hover": { backgroundColor: "#e3f2fd" },
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteProduct(product.id)}
                    sx={{
                      "&:hover": { backgroundColor: "#fce4ec" },
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit/Add Product Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            value={editingProduct?.name}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, name: e.target.value })
            }
            fullWidth
            margin="dense"
          />
          <TextField
            label="Price"
            value={editingProduct?.price}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, price: e.target.value })
            }
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleUpdateProduct}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product successfully updated or added!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AdminProducts;
