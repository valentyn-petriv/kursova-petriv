import React from 'react';
import './reset.css';
import './style.css';
import img1 from './img/img-1.jpg' 
import img2 from './img/img-2.jpg' 
import img3 from './img/img-3.jpg' 
 
import img5 from './img/img-5.jpg' 
import img6 from './img/img-6.jpg' 
import img7 from './img/img-7.jpg' 
import img8 from './img/img-8.jpg'
import img9 from './img/img-9.jpg' 
import img10 from './img/img-10.jpg' 
import img11 from './img/img-11.jpg' 
import img12 from './img/img-12.jpg' 
import img13 from './img/img-13.jpg' 
import img14 from './img/img-14.jpg' 
import img15 from './img/img-15.jpg' 
import img16 from './img/img-16.jpg'
import img17 from './img/img-17.jpg'  
const WorksComponent = () => {
    return (
        <>
        <div>
            <h1 className="head">Наші роботи</h1>

        </div>

    <div class="container">
        

            <div id="gallery">

                <figure class="photo">
                    <a href={img1}><img className="pho" src={img1} alt="" /></a>
                    
                </figure>

                <figure class="photo">
                    <a href={img2}><img className="pho" src={img2} alt="" /></a>
                   
                </figure>

                <figure class="photo">
                    <a href={img3}><img className="pho" src={img3} alt="" /></a>
                   
                </figure>

               

                <figure class="photo">
                    <a href={img5}><img className="pho" src={img5} alt="" /></a>

                </figure>
                <figure class="photo">
                    <a href={img6}><img className="pho" src={img6} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img7}><img className="pho" src={img7} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img8}><img className="pho" src={img8} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img9}><img className="pho" src={img9} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img10}><img className="pho" src={img10} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img11}><img className="pho" src={img11} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img12}><img className="pho" src={img12} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img13}><img className="pho" src={img13} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img14}><img className="pho" src={img14} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img15}><img className="pho" src={img15} alt="" /></a>

                </figure>
                                <figure class="photo">
                    <a href={img16}><img className="pho" src={img16} alt="" /></a>

                </figure>
                                           <figure class="photo">
                    <a href={img17}><img className="pho" src={img17} alt="" /></a>

                </figure>

            </div>
        </div>
        
        <script src="./lightbox-plus-jquery.min.js"></script>

        </>
    );
};

export default WorksComponent;