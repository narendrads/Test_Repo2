export function DataImgCard(){

    var courses=[
        {Tile:"Core-Java",Poster:"./core_java.jpeg",Topics:["features","oops","Exception-Handling","multithreading"] },
        {Tile:"Adv-Java",Poster:"./adv_java.jpg",Topics:["Servlets","jdbc","jsp"] },
        {Tile:"Spring",Poster:"./spring.jpg",Topics:["IOcontainer","mvc","jpa"] },
        {Tile:"UI",Poster:"./UI.jpg",Topics:["html","css","bootstrap"] }
    ]
    return(
        <div className="container-fluid">
            
         <h2>Courses</h2>
        <div className="d-flex flex-wrap">  
        {
              courses.map(corese=>
                <div className="card m-2 p-2 ">
                    <img src= {corese.Poster} className="card-card-img-top " height="150"/>
                    <div className="card-header">{corese.Tile}</div>
                    <div className="card-body">

                        <ul>
                            {
                                corese.Topics.map(topic=>
                                  <li>{topic}</li>  )
                            }  
                        </ul>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary w-100">Join Courses</button>
                    </div>
                </div>
                
              )
          }     
      </div>
      </div> 
    )
}