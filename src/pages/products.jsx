import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/Counter";

const products = [
     {
          id: 1,
          name: "Sepatu Baru",
          price: 1500000,
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     },
     {
          id: 2,
          name: "Sepatu Lama",
          price: 700000,
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     },
     {
          id: 3,
          name: "Sepatu Seken",
          price: 900000,
          image: "/images/shoes-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, dese runt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
     },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
     const [cart, setCart] = useState([
          {
               id: 1,
               qty: 1,
          },
     ]);

     const handleLogout = () => {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          window.location.href = "/login";
     }

     // const handleAddToCart = (id) => {
     //      setCart([
     //           ...cart,
     //           {
     //                id: id,
     //                qty: 2,
     //           },
     //      ]);
     // }

     const handleAddToCart = (id) => {
          if(cart.find(item => item.id === id)) {
               setCart(
                    cart.map(item => item.id === id ? {...item, qty: item.qty + 1} :item)
               )
          } else {
               setCart([...cart, {id, qty: 1}]);
          }
     };

     return (
          // Bisa menggunakan div kosong atau fragment
          <Fragment>
               <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                    {email}
                    <button className="bg-black p-2 ml-2" onClick={handleLogout}>Logout</button>
               </div>
               <div className="flex justify-center py-5">
                    <div className="w-4/6 flex flex-wrap">
                         {products.map((product) => (
                              <CardProduct key={product.id}>
                                   <CardProduct.Header image={product.image} />
                                   <CardProduct.Body name={product.name}>
                                        {product.description}
                                   </CardProduct.Body>
                                   <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                              </CardProduct>
                         ))}
                    </div>
                    <div className="w-2/6">
                         <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                         {/* <ul>
                              {cart.map((item) => (
                                   <li key={item.id}>{item.id}</li>
                                   ))}
                         </ul> */}
                         <table className="text-left table-auto border-separate border-spacing-x-5">
                              <thead>
                                   <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {cart.map((item) => {
                                        const product = products.find((product) => product.id === item.id);
                                        return (
                                             <tr>
                                                  <td>{product.name}</td>
                                                  {/* <td>{product.price}</td> */}
                                                  <td>Rp{" "} {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                                                  <td>{item.qty}</td>
                                                  <td>Rp {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                                             </tr>
                                        );
                                   })}
                              </tbody>
                         </table>
                    </div>
               </div>
               {/* <div className="flex justify-center w-100">
                    <Counter></Counter>
               </div> */}
          </Fragment>
     )
}

export default ProductsPage;