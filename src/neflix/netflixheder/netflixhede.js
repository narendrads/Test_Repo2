import './netflixheader.css';
export function NetflixHeder(){
    return(
        <div className="header">
          <div className='mt-4'> 
        <div className="brand-title">netflix</div>
          </div>
          <div>
            <div className="input-group">
                <span className="bi bi-globe input-group-text mt-4"></span>
                <select className="form-select mt-4">
                    <option>Language</option>
                    <option>English</option>
                    <option>हिंदी</option>
                </select>
                <div className='ms-4'>
                <button className="btn btn-danger mt-4">Signin</button>
            </div>
            </div>
           
          </div>

        </div>
    )
}