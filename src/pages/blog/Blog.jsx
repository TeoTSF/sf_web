import { useContext } from "react";
import "./blog.css";
import FilterComponent from "./utils/FilterComponent";
import PostCard from "./utils/PostCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import Loading from "../../components/Loading";

const Blog = () => {
    const [allPosts, setAllPosts] = useState([])
    const {getAllPosts} = useContext(MainContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try {
            const {data} = await getAllPosts()
            setAllPosts(data)
        } catch (error) {
            navigate("/")
        }
    }

    if (!allPosts[0]) {
      return <Loading loading={!allPosts[0]}/>;
    }
  return (
    <div className="blog_container">
      <div className="blog_info_container">
        <div className="blog_title_section flex column jf-c">
          <h2 className="title_section flex jf-c al-c xx-big autoM">BLOG</h2>
          <p className="x-big">Trading sin fronteras</p>
        </div>
        <FilterComponent />
        <div className="post_cards_container">
          {allPosts.map((post, i) => (
            <PostCard
                key={i}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
