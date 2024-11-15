import React, { useEffect, useContext } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../../../../../components/Loading";

const Courses = ({ value, index }) => {
  const { allCourses, setModule } = useContext(VirtualSchoolContext);
  
  useEffect(() => {
    setModule("admin_courses");
  }, []);

  const handleEdit = (postId) => {
    console.log(`Editando post con ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    console.log(`Eliminando post con ID: ${postId}`);
  };
  console.log(allCourses);
  
  return (
    <TabPanel value={value} index={index}>
      <TableContainer component={Paper}>
        <Table aria-label="Posts Table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Capitulos</TableCell>
              <TableCell>Duración Total</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Descuento</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCourses && allCourses.length > 0 ? (
              allCourses.map((course, i) => (
                <TableRow key={i}>
                  <TableCell>{course.id}</TableCell>
                  <TableCell>{course.title}</TableCell>
                  <TableCell>{course.description}</TableCell>
                  <TableCell>{course.videoCount}</TableCell>
                  <TableCell>{course.totalDuration}</TableCell>
                  <TableCell>{course.price}</TableCell>
                  <TableCell>{course.discount}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(post.id)}
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(post.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No hay cursos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
};

export default Courses;