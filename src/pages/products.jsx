import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
     {
          id: 1,
          name: "Sepatu Baru",
          price: "Rp 1.500.000",
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     },
     {
          id: 2,
          name: "Sepatu Lama",
          price: "Rp 700.000",
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     },
     {
          id: 3,
          name: "Sepatu Seken",
          price: "Rp 900.000",
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, dese runt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     },
];

const email = localStorage.getItem('email');

const handleLogout = () => {
     localStorage.removeItem('email');
     localStorage.removeItem('password');
     window.location.href = "/login";
}

const ProductsPage = () => {
     return (
          // Bisa menggunakan div kosong atau fragment
          <Fragment>
               <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                    {email}
                    <button className="bg-black p-2 ml-2" onClick={handleLogout}>Logout</button>
               </div>
               <div className="flex justify-center py-5">
                    {products.map((product) => (
                         <CardProduct key={product.id}>
                              <CardProduct.Header image={product.image} />
                              <CardProduct.Body name={product.name}>
                                   {product.description}
                              </CardProduct.Body>
                              <CardProduct.Footer price={product.price} />
                         </CardProduct>
                    ))}
               </div>
               <div className="flex justify-center w-100">
                    <Counter></Counter>
               </div>
          </Fragment>
     )
}

export default ProductsPage;