// CourseView.js (componente actualizado)
import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import Loading from "../../../../components/Loading";
import "./CourseView.css";

const CourseView = () => {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { getCourseVideo } = useContext(VirtualSchoolContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(courseId);
  }, [courseId]);

  const fetchData = async (courseId) => {
    setLoading(true);
    try {
      const response = await getCourseVideo(courseId);
      setData(response.data);
      setCurrentVideo(response.data.videos[0]); // Set the first video as the default
    } catch (error) {
      console.error("Error fetching course data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="course-view">
      <div className="course-header">
        <h1>{data?.course?.title}</h1>
        <p>{data?.course?.description}</p>
      </div>
      <div className="course-content">
        <div className="video-container">
          {currentVideo && (
            <iframe
              src={currentVideo.videoUrl}
              title={currentVideo.title}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          )}
        </div>
        <div className="video-list">
          <h3>Videos del curso</h3>
          <ul>
            {data?.videos.map((video, i) => (
              <li
                key={i}
                className={currentVideo?.id === video.id ? "active" : ""}
                onClick={() => handleVideoChange(video)}
              >
                {video.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="course-details">
          <p><strong>Total de videos:</strong> {data?.course?.videoCount}</p>
          <p><strong>Duración total:</strong> {data?.course?.totalDuration} minutos</p>
        </div>
    </div>
  );
};

export default CourseView;


