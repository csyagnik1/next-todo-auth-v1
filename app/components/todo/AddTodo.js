import React from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";


export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [date,setDate] =React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== ""  && date !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        date,
        completed: false,
      });
      setTitle("");
      setDate("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input_container">
        <input
          type="date"
          placeholder=""
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}