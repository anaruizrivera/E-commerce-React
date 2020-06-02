import React, { Component } from 'react';
import '../Footer/footer.css'


export default class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer id="footer">
        <p>| ANA RUIZ RIVERA | &copy; 2020, All Rights Reserved</p>
        <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
        <a href="https://twitter.com/explore" class="fa fa-twitter"></a>
        <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
        <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
             </footer>
            </React.Fragment>
        )
   
}
}

