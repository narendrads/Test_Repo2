import { NetflixRegister } from '../netflixregister/netflixregister';
import './netflixtmain.css';
export function NetflixMain(){

    return(
        <div className="text-white text-center">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <NetflixRegister></NetflixRegister>
        </div>
    )
}