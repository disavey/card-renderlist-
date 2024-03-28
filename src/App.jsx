import Card from "./Card";
import { Products } from "./data/dataProduct";
function App() {
  return (
    <div className="my-10 mx-10">
      <h2 className="font-bold text-xl p-5 text-center">MOTORCYCLE</h2>
      <div className="grid grid-cols-4 gap-4">
        {Products.map((product) => (
          <Card
            key={product.id}
            image={product.imageURL}
            name={product.nama}
            price={product.harga}
            desc={product.deskripsi}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
