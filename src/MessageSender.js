import React, { useState, useEffect } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
// state
import { useStateValue } from "./StateProvider";
// db
import { db } from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [mind, setMind] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    console.log(user);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        message: mind,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilPic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      })
      .then((r) => {
        setMind("");
        setImageUrl("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="MessageSender">
      <div className="messageSender__top">
        <Avatar src={user?.photoURL} />
        <form action="">
          <input
            className="messageSender__input"
            placeholder={`what's on your mind ${user?.displayName}`}
            type="text"
            onChange={(e) => setMind(e.target.value)}
            value={mind}
          />
          <input
            placeholder={"Image Url (Optional)"}
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
          <button onClick={handleSubmit} type="submit">
            {" "}
            Hidden button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
