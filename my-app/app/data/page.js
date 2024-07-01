const fetchProducts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Data = async () => {
  const products = await fetchProducts();
  console.log(products, "-->");

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-center m-2 bg-amber-600 text-white">
        FETCHING DATA USING CLIENT COMPONENT
      </h1>
      <ul>
        {products?.map((item) => (
          <li key={item.id} className="p-2 m-2 border-red-600 border-2">{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
