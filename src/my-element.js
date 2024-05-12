import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },
      /**
       * Este es el subtitulo de mi pagina
       */
      subtitle: { type: String },
      /**
       * Este es mi parrafo 1
       */
      paragraph1: { type: String },
      /**
       * Esta es la url de la imagen 
       */
      Image1url: { type: String },
      /**
       * Este es el elemento 1 de la lista 1
       */
      list1Element1: { type: String },
      /**
       * Este es el elemento 2 de la lista 1
       */
      list1Element2: { type: String },
      /**
       * Este es el elemento 3  de la lista 1
       */
      list1Element3: { type: String },
      /**
       * Este es el elemento 4 de la lista 1
       */
      list1Element4: { type: String },
      /**
       * Este es el elemento 5 de la lista 1
       */
      list1Element5: { type: String },
      /**
       * Esta es la image 2
       */
      image2url: { type: String },
    }
  }

  constructor() {
    super()
    this.title = 'COSTURAS PEPITA'
    this.paragraph1 = 'Costuras y Reparaciones en ropa'
    this.image1Url = 'https://hotbook.mx/wp-content/uploads/2017/10/MONDRE-PORTADA.jpg'
    this.subtitle = 'ATENCION PERSONALIZADA'
    this.paragraph2 = 'Atendemos los 5 dias de la semana en'
    this.list1Element1 = 'Reparacion en ropa nueva y usada'
    this.list1Element2 = 'Cambio y reparacion de cierres'
    this.list1Element3 = 'Hechura de ojales'
    this.list1Element4 = 'Ponemos botones'
    this.list1Element5 = 'Hechura de bastillas y dobladillos'
    this.image2Url = 'https://www.unweartales.com/blog-images/estilistas-haciendo-ajuste-modelo_53876-72195.jpg'
    this.paragraph3 = 'Reparacion Ropa nueva y usada'
    this.image3url = 'https://i.pinimg.com/474x/01/c3/fa/01c3fa5cd4776c176e378adf5ca71c80.jpg'
    this.paragraph4 = 'Reparacion y cambio de Cierres'
    this.image4url = 'https://2.bp.blogspot.com/-6pxrmKwGtqc/U2QTx0MOM9I/AAAAAAAAHkU/sXGPQRhaeSE/s1600/cambiar+botones+por+cremallera+13.JPG'
    this.list2Element1 = 'Cambio y Compostura de Cierres metalicos'
    this.list2Element2 = 'Cambio y Compostura de Cierres plasticos'
  }

  render() {
    return html`
    <div id="main">
      <h1><b><i><u>${this.title}</u></i></b></h1>
      <h2>${this.subtitle}</h2>
      <p>${this.paragraph1}</p>
      <img src="${this.image1Url}">
      <p>${this.paragraph2}</p>
      <img src="${this.image2Url}">
      <p>${this.paragraph3}</p>
      <ul>
        <img src="${this.image3url}">
        <li><i>${this.list1Element1}</i></li>
        <li><i>${this.list1Element2}</i></li>
        <li><i>${this.list1Element3}</i></li>
        <li><i>${this.list1Element4}</i></li>
        <li><i>${this.list1Element5}</i></li>
      </ul>
      <p>${this.paragraph4}</p>
      <img src="${this.image4url}">
      <li><i>${this.list2Element1}</i></li>
      <li><i>${this.list2Element2}</i></li>
  </div>`
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
      }
      body{
        background-color: plum;
      }
      p {
        background-color: chartreuse;
        font-family: Georgia;
        color: rgb(165, 42, 144);
      }
      #costuras-pepita {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      div{
        padding: 15vw ;
      }
      #costuras {
        background-color: cadetblue;
      }
      img {
        width:25vw;
      }
      p {
        font-size:10vh;
      }
      h1{
        font-size:15vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
