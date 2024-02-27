export function NesteData()
{
    var memu =[

{category:"electronics", product:["tv","mobile"]},
{category:"Footwar",product:["nike casuals","lee Boot"]}

    ]

    return(

        <div className="container-fluid">
             <h2>Select category</h2>
          {
            memu.map(item=>
            
            <details>
                <summary>{item.category}</summary>
             <ul>
                {
                    item.product.map(product=><li >{product}</li>)
                  }
            </ul>
            </details>
            )
          }

        <h2>Shopping Menu</h2>
        <ol>
            {
                memu.map(
                    item=><li key={item.category}>{item.category}
                    <ul>
                     {item.product.map(produc=>
                        <li key={item.product}>{produc}</li>)}
                    </ul>
                    </li>
                )
            }
        </ol>
        <h2>select Product</h2>
          <select>
            {
                memu.map(item=>
                    <optgroup label={item.category} key={item.category}>
                        {
                            item.product.map(product=><option>{product}</option>)
                        }
                    </optgroup>
                    )
            }
          </select>
         
        </div>
    )
}