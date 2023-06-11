import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
     {
          id: 1,
          name: "Sepatu Baru",
          price: "Rp 1.000.000",
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     }
];

const ProductsPage = () => {
     return (
          <div className="flex justify-center py-5">
               
               {products.map((product) => (
                    <CardProduct>
                    <CardProduct.Header image={product.image}/> 
                    <CardProduct.Body name={product.name}>
                    {product.description}</CardProduct.Body> 
                    <CardProduct.Footer price="Rp 1.000.000" /> 
               </CardProduct>
               ))}
          </div>
     )
}

export default ProductsPage;