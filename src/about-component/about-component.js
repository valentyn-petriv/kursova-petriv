import React from 'react';
import img from './img.jpg' 
import './about.css';
const AboutComponent = () => {
    return (
        <>
       <img
      className="AboutImg"
      src={img}
      width="100%"
    />
 <h1 class = "T" >Про нас</h1>
 <div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10485.966996272711!2d24.7085383!3d48.9250749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeaabcb0e3457f322!2z0JDRgtC10LvRjNGUINCU0LjQstC-!5e0!3m2!1suk!2sua!4v1638955508521!5m2!1suk!2sua" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
<div className="about" >
<h1 >Ательє "Диво"</h1>
<p className="text1" >Шиємо і ремонтуєм одяг<br/>
м.Івано-Франківськ<br/>
Вул.Любомира Гузара,49<br/>
3 поверх 307 офіс (над Єврошопом)<br/>
<br/>
</p>

<p>
Пн-Сб 09:00-18:30 <br/>
Нд - Вихідний
</p>


<p>Тел. 0664316009
</p>
<br/>
<p><a className="socialMedia" href="https://www.instagram.com/atelierdyvo/">Наш instagram</a></p>

<p><a className="socialMedia"  href="https://www.facebook.com/people/%D0%90%D1%82%D0%B5%D0%BB%D1%8C%D1%94-%D0%94%D0%B8%D0%B2%D0%BE/100024936194190">Наш facebook</a></p>
<br/><br/><br/><br/>


</div>
</div>
 </>
    );
};

export default AboutComponent;
