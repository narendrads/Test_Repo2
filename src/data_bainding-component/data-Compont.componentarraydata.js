export function ArrayData(){

    var categirys=["Electronics","Footware","Food","furneeture"]
    return(
        <div>
             <ol >
                {
                    categirys.map(categirys=><li key={categirys}>{categirys}</li>)
                }
             </ol>
             <select>
                {
                     categirys.map(categirys=><option key={categirys}>{categirys}</option>)
                }
             </select>
             <div>
                 
             </div>
        </div>
    )
}