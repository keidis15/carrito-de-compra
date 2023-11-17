export default class Tabs {
    constructor (idElemento){
        this.tabs =  document.getElementById(idElemento)
        this.nav = this.tabs.querySelector(".tabs");

        //comprobamos que el elemento que clickeamos tenga la clase tabs__button
        this.nav.addEventListener("click", (e)=>{
            if([...e.target.classList].includes("tabs__button")){


                //obtenemos la tabs que queremos mostrar
            const tab = e.target.dataset.tab;

            //eliminamos la clase active de alguna otra tab que la tenga.
            if(this.tabs.querySelector(".tab--active")){
                this.tabs.querySelector(".tab--active").classList.remove("tab--active")
            }
            if(this.tabs.querySelector(".tabs__button--active")){
                this.tabs.querySelector(".tabs__button--active").classList.remove("tabs__button--active")
            }
            
            //agregamos la clase activa al tab
            this.tabs.querySelector(`#${tab}`).classList.add("tab--active");

            //agregamos la clase activa al button

        e.target.classList.add("tabs__button--active");

        };
        })
            
    }

}