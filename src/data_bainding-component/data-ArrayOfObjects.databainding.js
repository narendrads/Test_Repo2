export function ArrayOfObjectsData(){
 var Product=[
{
    "name":"tv",
    "price":8939,
    "rating":4.0
}
,
{
    "name":"mobaile",
    "price":93932,
    "rating":4.5

},
{
    "name":"laptop",
    "price":933932,
    "rating":4.2

}
 ]
    return(
        <div className="container-fluid">
         <h2>Product details</h2>
         <table className="table table-hover">
           <thead>
           <tr>
                <th>Name</th>
                <th>Price </th>
                <th>Rating</th>
                <th>Action</th>
            </tr>
           </thead>
           <tbody>
            {
                Product.map(product=>
                <tr key={product.name}>
                 <td>{product.name}</td>
                 <td>{product.price}</td>
                 <td>{product.rating}</td>
                 <td>
                    <button className="btn btn-info "> <span className="bi bi-eye-fill"></span></button>
                    <button className="btn btn-warning ms-2"> <span className="bi bi-pen-fill"></span></button>
                    <button className="btn btn-danger  ms-2"> <span className="bi bi-trash"></span></button>
                 </td>
                </tr>)
            }
           </tbody>
         </table>
        </div>
    )
}