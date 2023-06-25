import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          hey={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></LineItem>
      ))}
    </ul>
  );
};

export default ItemList;
