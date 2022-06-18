import { useState,useEffect } from "react";
import Hero from "./components/Hero";
import List from "./components/List";
import Logo from "./components/Logo";
import { v4 as uuidv4 } from "uuid";
import { Add } from "@mui/icons-material";

const getLocalStorage = () => {
  let items = localStorage.getItem("item")

  if(items){
    return JSON.parse(localStorage.getItem("item"))
  }else{
    return []
  }
}

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      title: text,
    };
    setItems([newItem, ...items]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <main>
        <Logo />
        <Hero />
        <form
          className="flex items-center justify-center mt-5 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Enter your plan todo"
            className="py-3 px-10 rounded-lg bg-gray-600 text-white tracking-wide"
            autocomplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <Add
              className="todo-button flex bg-blue-600 text-white  ml-2 p-2  rounded-md cursor-pointer hover:bg-blue-700 "
              style={{ fontSize: "45px" }}
            />
          </button>
        </form>
        <List items={items} setItems={setItems} deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;
