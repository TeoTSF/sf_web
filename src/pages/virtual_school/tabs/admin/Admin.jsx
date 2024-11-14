import React from "react";
import VerticalTabs from "../../utils/VerticalTabs";
import CreatePost from "../../modals/CreatePost";
import { useContext } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";

const Admin = () => {
    const {modal, setModal, module, createPost } = useContext(VirtualSchoolContext)

    const closeModal = () => {
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
            onClose={closeModal}
            onSubmit={createPost}
          />
        )
      }
    </>
  );
};

export default Admin;
