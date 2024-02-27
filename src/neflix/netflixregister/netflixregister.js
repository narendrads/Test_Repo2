export function NetflixRegister(){

    return(
        <div>
            <div className="mt-4">

                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-group input-group-lg">
                    <input type="email" className="form-control" placeholder="Enter you Email" />

                    <button className="btn btn-danger">
                        Get Started
                        <span className="bi-bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}