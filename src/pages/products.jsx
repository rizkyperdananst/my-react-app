import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
     return (
          <div className="flex justify-center py-5">
               <CardProduct>
                    <CardProduct.Header image="/images/shoes-1.jpg"/> 
                    <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.</CardProduct.Body> 
                    <CardProduct.Footer price="Rp 1.000.000" /> 
               </CardProduct>
               <CardProduct>
                    <CardProduct.Header image="/images/shoes-1.jpg"/> 
                    <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet consequuntur eos mollitia fugiat, deserunt quam voluptatum suscipit vero dolores placeat deleniti ratione ea magni minus, enim cupiditate odit perferendis.</CardProduct.Body> 
                    <CardProduct.Footer price="Rp 1.000.000" /> 
               </CardProduct>
          </div>
     )
}

export default ProductsPage;