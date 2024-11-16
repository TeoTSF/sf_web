import React, { useState, useEffect, useContext } from "react";
import Curtain from "../../../components/generals/Curtain";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import VirtualSchoolContext from "../../../context/VirtualSchoolContext";

const CreateVideo = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    videoUrl: "",
    duration: "",
    courseId: "",
    file: null,
    title: "",
  });

  const { getAllCourses, allCourses } = useContext(VirtualSchoolContext);

  useEffect(() => {
    getAllCourses({flag: true})
  }, []);

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
    data.append("videoUrl", formData.videoUrl);
    data.append("duration", formData.duration);
    data.append("courseId", formData.courseId);
    data.append("file", formData.file);
    data.append("title", formData.title);

    onSubmit(data);
    onClose();
  };
  console.log(allCourses);
  
  return (
    <Curtain open={open}>
      <div className="modal_container md">
        <div className="flex row jf-sb full-w">
          <p className="x-big full-w bold">Crear Video</p>
          <i className="bx bx-x md btn_app" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="URL del Video"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Duración (en segundos)"
            name="duration"
            type="number"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="courseId-label">Curso</InputLabel>
            <Select
              labelId="courseId-label"
              name="courseId"
              value={formData.courseId}
              onChange={handleInputChange}
              required
            >
              {allCourses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Crear Video
          </Button>
        </form>
      </div>
    </Curtain>
  );
};

export default CreateVideo;
