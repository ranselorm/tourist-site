import { react, useState, useContext } from "react";
import { SitesContext } from "../store/SitesContext";

const CreateSite = () => {
  const { dispatch } = useContext(SitesContext);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const clearFields = () => {
    setTitle("");
    setLocation("");
    setDescription("");
    setImage("");
  };

  const submitChangeHandler = async (event) => {
    event.preventDefault();
    const site = {
      title,
      location,
      description,
      image,
    };

    const response = await fetch("/api/campgrounds", {
      method: "POST",
      body: JSON.stringify(site),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_SITE", payload: json });
      setTitle("");
      setLocation("");
      setDescription("");
      setImage("");
    }

    if (!response.ok) {
      setError(json.error);
    }
  };

  return (
    <form onSubmit={submitChangeHandler} className="create">
      <h2>Create Site</h2>
      <label htmlFor="title">Name of Site</label>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <div>
        <button className="btn-clear" onClick={clearFields}>
          Clear
        </button>
        <button>Create</button>
      </div>
    </form>
  );
};

export default CreateSite;
