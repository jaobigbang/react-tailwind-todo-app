import { Close } from "@mui/icons-material";

function List({ items, setItems, deleteItem }) {
  return (
    <>
      {items.length !== 0 && (
        <article>
          <ul className=" mx-5 p-2   bg-gray-600 rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
            {items.map(({ id, title }) => (
              <ul className="flex items-center justify-between px-4 border-b border-gray-600 ">
                <li
                  key={id}
                  className="todo-list text-white  py-3 tracking-wider "
                >
                  {title}
                </li>
                <button className="text-xl">
                  <Close
                    className="text-red-400"
                    onClick={() => deleteItem(id)}
                  />
                </button>
              </ul>
            ))}

            <ul className="flex items-center justify-between rounded-lg px-6 py-3 bg-white ">
              <li>
                <p className="text-sm text-gray-500">{items.length} item left</p>
              </li>
              <li>
                <button
                  className="text-sm text-gray-500"
                  onClick={() => setItems([])}
                >
                  Clear list
                </button>
              </li>
            </ul>
          </ul>
        </article>
      )}
    </>
  );
}

export default List;
