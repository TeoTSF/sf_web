import React from "react";
import VerticalTabs from "../../utils/VerticalTabs";
import CreatePost from "../../modals/CreatePost";
import { useContext } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import FloatingBtn from "../../utils/FloatingBtn";
import Loading from "../../../../components/Loading";
import CreateCourse from "../../modals/CreateCourse";

const Admin = () => {
  const { modal, setModal, module, createPost, loading, createCourse } =
    useContext(VirtualSchoolContext);

  const toggleModal = () => {
    setModal((current) => !current);
  };
  return (
    <>
      <div className="admin_container flex column full-w autoM">
        <VerticalTabs />
      </div>
      <Loading loading={loading} />
      <FloatingBtn openModal={toggleModal} />
      {module == "admin_posts" && (
        <CreatePost open={modal} onClose={toggleModal} onSubmit={createPost} />
      )}
      {module == "admin_courses" && (
        <CreateCourse open={modal} onClose={toggleModal} onSubmit={createCourse} />
      )}
    </>
  );
};

export default Admin;
