class AppSample extends HTMLElement {
    constructor () {
        super()
        //Se accede al html import y dentro de el, al template
        const oImport = document.querySelector('link[rel="import"]').import;
        const elem = oImport.querySelector('#temp1')
        let shadow = this.attachShadow({mode: 'open'})
        
        //El nodo del template asi accedido se incorpora a la shadow DOM
        shadow.innerHTML = elem.innerHTML

        let boton = shadow.querySelector("#saludar")
        boton.addEventListener("click", this.saludar.bind(this))
    }
}

customElements.define('app-sample', AppSample)