import './netflixindex.css';
import { NetflixHeder } from '../netflixheder/netflixhede';
import { NetflixMain } from '../netflixmain/netflixmain';

export function NetflixIndext(){
    return(
        <div id="banner">
          <div id="shade">
          <NetflixHeder/>
          <main>
          <div>
          <NetflixMain/>
          </div>
           </main>
          </div>
          </div>
    )
}