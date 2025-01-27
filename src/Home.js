
import Logo from "./logo2.png";
import Styles from './style.module.css';
function Home(){




    return(

            <div id="Home" className={Styles.Home}>
              <div className={Styles.HomeContent}>
              <img src={Logo}  alt='Logo' className={Styles.MobileLogo}/>
              <div className={Styles.Slogan}>
                <span>More than just a website</span>
              </div>
              <div className={Styles.Text1}>
              At the heart of my design philosophy is the belief that a website should be 
             <span style={{fontWeight:'bold'}}>'more than just a website'</span> . 
              It is a dynamic platform where the interactive experience between 
              <span style={{fontWeight:'bold'}}> user</span>, 
              <span style={{fontWeight:'bold'}}> device</span>, and 
              <span style={{fontWeight:'bold'}}> information </span>
              determines its true value.
              <p></p>
             
              This interaction goes beyond superficial clicks and views,
               It's about creating a seamless, intuitive, 
               and engaging dialogue between the user and the device, 
               where information is not merely displayed but dynamically exchanged and experienced. 
               We see the website as a conduit,
                a portal that brings together technology and human curiosity in a harmonious symphony.
              </div>
              
              </div>
            </div>

           
       
    )
}
export default Home;