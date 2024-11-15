import React, { useState } from "react";
import Curtain from "../../../components/generals/Curtain";
import {
  TextField,
  Button,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

const CreateCourse = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
    price: "",
    discount: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("file", formData.file);
    data.append("price", formData.price);
    data.append("discount", formData.discount);

    onSubmit(data);
    onClose();
  };

  return (
    <Curtain open={open}>
      <div className="modal_container md">
        <div className="flex row jf-sb full-w">
          <Typography variant="h5" className="bold">
            Crear Producto
          </Typography>
          <i className="bx bx-x md btn_app" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Título */}
          <TextField
            fullWidth
            margin="normal"
            label="Título"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          {/* Descripción */}
          <TextField
            fullWidth
            margin="normal"
            label="Descripción"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          {/* Imagen */}
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="file">Imagen</InputLabel>
            <input
              type="file"
              name="file"
              onChange={handleInputChange}
              accept="image/*"
              required
            />
          </FormControl>
          {/* Precio */}
          <TextField
            fullWidth
            margin="normal"
            label="Precio"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          {/* Descuento */}
          <TextField
            fullWidth
            margin="normal"
            label="Descuento (%)"
            name="discount"
            type="number"
            value={formData.discount}
            onChange={handleInputChange}
          />
          {/* Botón de Enviar */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Crear Producto
          </Button>
        </form>
      </div>
    </Curtain>
  );
};

export default CreateCourse;
