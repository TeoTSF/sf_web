import React, { useState } from "react";
import Curtain from "../../../components/generals/Curtain";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

const CreatePost = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    file: null,
    title: "",
    description: "",
    tagId: "",
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
    data.append("file", formData.file);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("tagId", formData.tagId);

    onSubmit(data);
    onClose();
  };

  return (
    <Curtain open={open}>
      <div className="modal_container md">
        <div className="flex row jf-sb full-w">
          <p className="x-big full-w bold">Crear Publicación</p>
          <i className="bx bx-x md btn_app" onClick={onClose}/>
        </div>
        <form onSubmit={handleSubmit}>
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
          <TextField
            fullWidth
            margin="normal"
            label="Título"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
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
          <FormControl fullWidth margin="normal">
            <InputLabel id="tagId-label">Categoría</InputLabel>
            <Select
              labelId="tagId-label"
              name="tagId"
              value={formData.tagId}
              onChange={handleInputChange}
              required
            >
              <MenuItem value={1}>Trading</MenuItem>
              <MenuItem value={2}>Analisis</MenuItem>
              <MenuItem value={3}>Resultados</MenuItem>
              <MenuItem value={4}>Clases</MenuItem>
              <MenuItem value={5}>Gestión</MenuItem>
              <MenuItem value={6}>Señales</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Crear Publicación
          </Button>
        </form>
      </div>
    </Curtain>
  );
};

export default CreatePost;
