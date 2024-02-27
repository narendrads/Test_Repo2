import './login.component.css';
export function LoginComponent(){
    return(
 <div id='form-container' className="container-fluis">
    <form>
        <h2 className="bi bi-person-fill">User login</h2>
        <div className="mb-2">
            <label className="form-label">User name</label>
            <div>
                <input type="text" className="form-control"/>
            </div>
        </div>
        <div className="mb-2">
            <label className="form-label">Password</label>
            <div>
                <input type="password" className="form-control" />
            </div>
        </div>
        <div>
            
            <button className="btn btn-primary"> Login</button>
        </div>
    </form>
 </div>
    )
}