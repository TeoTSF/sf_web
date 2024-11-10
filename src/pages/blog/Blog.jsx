// Blog.js
import React from 'react';
import "./blog.css";
import FilterComponent from './utils/FilterComponent';
import PostCard from './utils/PostCard';
import post from "./utils/post";

const Blog = () => {
    return (
        <div className='blog_container'>
            <div className='blog_info_container'>
                <div className='blog_title_section flex column jf-c'>
                    <h2 className='title_section flex jf-c al-c xx-big autoM'>BLOG</h2>
                    <p className='x-big'>Trading sin fronteras</p>
                </div>
                <FilterComponent />
                <div className="post_cards_container">
                    {post.map((post) => (
                        <PostCard
                            key={post.id}
                            titulo={post.titulo}
                            autor={post.autor}
                            fecha={post.fecha}
                            categoria={post.categoria}
                            imagen={post.imagen}
                            resumen={post.resumen}
                            enlace={post.enlace}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
