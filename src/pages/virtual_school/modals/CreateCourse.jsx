import React, { useState } from "react";
import "./modals.css";

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
    <div className="modal_overlay">
      <div className="modal_container">
        <div className="modal_header">
          <h2 className="modal_title">Crear Producto</h2>
          <button className="modal_close_btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Título */}
          <div className="form_group">
            <label htmlFor="title" className="form_label">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form_input"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Descripción */}
          <div className="form_group">
            <label htmlFor="description" className="form_label">Descripción</label>
            <textarea
              id="description"
              name="description"
              className="form_textarea"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Imagen */}
          <div className="form_group">
            <label htmlFor="file" className="form_label">Imagen</label>
            <input
              type="file"
              id="file"
              name="file"
              className="form_input"
              onChange={handleInputChange}
              accept="image/*"
              required
            />
          </div>
          {/* Precio */}
          <div className="form_group">
            <label htmlFor="price" className="form_label">Precio</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form_input"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Descuento */}
          <div className="form_group">
            <label htmlFor="discount" className="form_label">Descuento (%)</label>
            <input
              type="number"
              id="discount"
              name="discount"
              className="form_input"
              value={formData.discount}
              onChange={handleInputChange}
            />
          </div>
          {/* Botón de Enviar */}
          <div className="form_actions">
            <button type="submit" className="btn_primary">Crear Producto</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;

