import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

// const products = [
//      {
//           id: 1,
//           name: "Sepatu Baru",
//           price: 1500000,
//           image: "/images/shoes-1.jpg",
//           description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
//      },
//      {
//           id: 2,
//           name: "Sepatu Lama",
//           price: 700000,
//           image: "/images/shoes-1.jpg",
//           description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
//      },
//      {
//           id: 3,
//           name: "Sepatu Seken",
//           price: 900000,
//           image: "/images/shoes-1.jpg",
//           description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, dese runt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.",
//      },
// ];

const ProductsPage = () => {
     const [cart, setCart] = useState([]);
     const [totalPrice, setTotcalPrice] = useState(0);
     const [products, setProducts] = useState([]);
     // const [username, setUsername] = useState("");
     const username = useLogin();

     useEffect(() => {
          setCart(JSON.parse(localStorage.getItem("cart")) || []);
     }, []);

     // useEffect(() => {
     //      // getUsername(token);
     //      const token = localStorage.getItem('token');
     //      if (token) {
     //           setUsername(getUsername(token));
     //      } else {
     //           window.location.href = "/login";
     //      }
     // }, []);

     useEffect(() => {
          getProducts((data) => {
               setProducts(data);
          });
     }, []);

     useEffect(() => {
          if(products.length > 0 && cart.length > 0) {
               const sum = cart.reduce((acc, item) => {
                    const product = products.find((product) => product.id === item.id);
                    return acc + product.price * item.qty;
               }, 0);
               setTotcalPrice(sum);
               localStorage.setItem("cart", JSON.stringify(cart));
          }
     }, [cart, products]);

     const handleLogout = () => {
          localStorage.removeItem('token');
          // localStorage.removeItem('password');
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
                    {username}
                    <button className="bg-black p-2 ml-2" onClick={handleLogout}>Logout</button>
               </div>
               <div className="flex justify-center flex-wrap py-5">
                    <div className="w-4/6 flex flex-wrap">
                         {products.length > 0 && products.map((product) => (
                              <CardProduct key={product.id}>
                                   <CardProduct.Header image={product.image} />
                                   <CardProduct.Body name={product.title}>
                                        {product.description}
                                   </CardProduct.Body>
                                   <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                              </CardProduct>
                         ))}
                    </div>
                    <div className="w-2/6 ">
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
                                   {products.length > 0 && cart.map((item) => {
                                        const product = products.find((product) => product.id === item.id);
                                        return (
                                             <tr>
                                                  <td>{product.title.substring(0, 10)}...</td>
                                                  {/* <td>{product.price}</td> */}
                                                  <td>Rp{" "} {product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                                                  <td>{item.qty}</td>
                                                  <td>$ {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                                             </tr>
                                        );
                                   })}
                                   <tr>
                                        <td colSpan={3}><b>Total Price</b></td>
                                        <td><b>${" "} {totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b></td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
               {/* <div className="flex justify-center w-100 mb-5">
                    <Counter></Counter>
               </div> */}
          </Fragment>
     )
}

export default ProductsPage;