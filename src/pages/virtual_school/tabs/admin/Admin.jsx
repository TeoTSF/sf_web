import React from "react";
import VerticalTabs from "../../utils/VerticalTabs";
import CreatePost from "../../modals/CreatePost";
import { useContext } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import FloatingBtn from "../../utils/FloatingBtn";

const Admin = () => {
    const {modal, setModal, module, createPost } = useContext(VirtualSchoolContext)

    const toggleModal = () => {
      setModal(current => !current)
    }
    
  return (
    <>
      <div className="admin_container flex column full-w autoM">
        <VerticalTabs />
      </div>
      {
        module == "admin_posts" && (
          <CreatePost 
            open={modal} 
            onClose={toggleModal}
            onSubmit={createPost}
          />
        )
      }
      <FloatingBtn openModal={toggleModal} />
    </>
  );
};

export default Admin;
