import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class badgeTrial extends LitElement {
  static properties = {
   badgeName:{
    type: String,
    reflect: true,
  },
  badgeDescrip: {
    type: String,
  },
  badgeImg:{
    type: String
  },
  instructorName:{
    type: String,
    reflect: true,
  }

 }


constructor() {
    super();
    this.badgeName = "APA Styles"
    this.instructorName= "Victoria";
    this.badgeDescrip= "how to do apa citations, a quick intro"
    this.badgeImg = "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png";

  }

   render() {
    return html`

      <div class = "card">
        <!-- Title/Header Code -->
        <h4 class = "title">${this.badgeName}</h4>
        <h5 class = "subtitle">${this.instructorName}</h5>
      <!-- Image Code -->
      <div class ="meme">
       <meme-maker
        image-url="${this.badgeImg}"
        ></meme-maker>
         </meme-maker>
     </div>
        <details class = 'details'>
          <summary>Details</summary>
         <p> ${this.badgeDescrip}</p>
         <slot></slot>
        </details>
     </div>
      </div>
    `;
  }
}