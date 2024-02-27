export function Databainding(){
 var Product={
    "name":"tv",
    "price":29333,
    "rating":4.5
 };
    return(

        <div className="container-fluid">
        <h2>Product details</h2>
       <dl>

        <dt>Name</dt>
        <dd><input type="text" value={Product.name}></input></dd>
       </dl>
        </div>
    )
}