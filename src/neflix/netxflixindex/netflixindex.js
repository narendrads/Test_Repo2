import './netflixindex.css';
import { NetflixHeder } from '../netflixheder/netflixhede';
import { NetflixMain } from '../netflixmain/netflixmain';
import { Footer } from '../netflixfooter/netflixfooter';

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
          <div>
        <Footer/>
          </div>
          </div>
    )
}