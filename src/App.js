import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "./App.css";
import Serchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ApiServise from "./services/ApiService";
import Modal from "./components/Modal/Modal";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const renderGallery = () => {
      setStatus(Status.PENDING);

      ApiServise.fetchImages(searchQuery, page)
        .then((responce) => {
          setGallery((prevState) => [...prevState, ...responce.hits]);
        })
        .catch((error) => {
          setStatus(Status.REJECTED);
        })
        .finally(() => {
          setStatus(Status.RESOLVED);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    };

    renderGallery();
  }, [searchQuery, page]);

  const handleFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1);
    setGallery([]);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const onImageClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      return;
    }
    setCurrentImage(e.target.dataset.img);

    toggleModal();
  };

  return (
    <div className="App">
      <Serchbar onSubmit={handleFormSubmit} value={searchQuery} />
      {status === Status.PENDING && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={3000} //3 secs
        />
      )}
      {status === Status.REJECTED && <h1>{"Something went wrong"}</h1>}
      {status === Status.RESOLVED && (
        <>
          <ImageGallery gallery={gallery} onImageClick={onImageClick} />

          <Button onClick={onLoadMore} text={"Load more"} />
        </>
      )}
      {showModal && (
        <Modal onClose={toggleModal} imageForModal={currentImage} />
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
