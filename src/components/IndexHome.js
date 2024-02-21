//STEP 1 -- IMPORT REACT
import React from 'react'
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



import '../css/Home.css';
import Navbar from './Navbar';
import Logo from '../images/12.jpg';
import Logo4 from '../images/13.jpg';
import Logo5 from '../images/16.jpg';
import Logo6 from '../images/15.jpg';
import Logo7 from '../images/14.jpg';
import Logo200 from '../images/17.jpg';
import Logo201 from '../images/18.jpg';
import Logo202 from '../images/19.jpg';
import Logo203 from '../images/20.jpg';
import cover123 from '../images/cover123.jpg';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT



function IndexHome() {

 
    return (
        < div id="App30">  
        <div id="head1"><b>MEDICARE</b></div>

            <Navbar/>
            <div>
                <img src={cover123} id="App13"></img>
            </div>
             


            <br/>


<h3 style={{"color":"#AFEEEE"}}>Some of the doctors are Available in our website</h3>

<br/>




            <div className="row" id="App17">
      <div className="col-lg-3">
        <div className="card" id="App16">
          <img id="App15" className="card-img-top" src={Logo200} alt="Card image" />
          <div className="card-block">
            <h4 className="card-title">Shivani</h4>
            <p className="card-text">Medical Speaciality Ophthalmologist Experience 10 Years</p>
            <br/>
            <br/>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card" id="App16">
          <img id="App15" className="card-img-top" src={Logo201} alt="Card image"  />
          <div className="card-block">
            <h4 className="card-title">Harsha</h4>
            <p className="card-text">Medical Speaciality Neurologist Experience 35 Years</p>
            <br/>
            <br/>

          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card" id="App16">
          <img id="App15" className="card-img-top" src={Logo202} alt="Card image" />
          <div className="card-block">
            <h4 className="card-title">Sai teja</h4>
            <p className="card-text">Medical Speaciality Orthologist Experience 37</p>
            <br/>
            <br/>

          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card" id="App16">
          <img id="App15" className="card-img-top" src={Logo200} alt="Card image"  />
          <div className="card-block">
            <h4 className="card-title">Yeswanth</h4>
            <p className="card-text">Medical Speaciality Dentist Experience 38 Years</p>
            
            <br/>
            <br/>

          </div>
        </div>
      </div>
</div>


<br/>


      <br/>
      <h1 style={{"color":"#AFEEEE"}}>ABOUT US</h1>
    <p id="App21">Medicare is for those people who don't want to wait long queue to book an appointment with one of the best doctorsnearby and also for those doctors who wish consult their patients at their own convenience.</p>
    <div>
        <img id="App51" src={Logo4}></img>
    </div>
<br/>
    <h3>Reviews</h3>
    <br/>


    <div className="row" id="App24">
      <div className="col-lg-3">
        <div className="card" id="App26">
          <img id="App25" className="card-img-top" src={Logo5} alt="Card image" />
          <div className="card-block">
            <h4 className="card-title">Ramesh</h4>
            <p className="card-text"><b>"I would like to let you </b>know how much we appreciate the special care our daughter was given by the doctors and staff" </p>
           <br/>
           <br/>

          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card" id="App26">
          <img id="App25" className="card-img-top" src={Logo6} alt="Card image"  />
          <div className="card-block">
            <h4 className="card-title">Shivani</h4>
            <p className="card-text"><b>"The waiting time </b>for getting an appointment approved is too less and that's why I like Medicare website"</p>
            <br/>
            <br/>

          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card" id="App26">
          <img id="App25" className="card-img-top" src={Logo7} alt="Card image" />
          <div className="card-block">
            <h4 className="card-title">Giri</h4>
            <p className="card-text"><b>"I recommed it all working </b>professional who doesn't have much time to wait at hospital or visit a doctor physically"</p>
            <br/>
            <br/>

          </div>
        </div>
      </div>
       </div>
      
    <br/>
       <div>
     
        
       </div>
        </div>)

}

//STEP 3 -- EXPORT IT TO USE IT
export default IndexHome;