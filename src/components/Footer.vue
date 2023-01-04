<script >

// elements
var elements_to_watch = document.querySelectorAll('.watch');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});
export default{
  data() {
    return {
        footerElement : [{title:"Scopri e acquista",
                link: [
                " Store",
               " Mac" ,
               "iPad",
               "iPhone",
                "Watch",
               " AirPods",
                "TV & Casa",
               " AirTag",
               " Accessori",
               " Carte regalo"]}
               
            ,
            {title:"Servizi",
            link:

            [ " Apple Music",
             " Apple TV+",
              "Apple Fitness+",
             " Apple Arcade",
              "iCloud",
             " Apple One",
            "  Apple Pay",
            "  Apple Books",
             " Apple Podcast",
             " App Store"]
          },
          {title:"Account",
          link:[
            "Gestisci il tuo ID Apple",
            "Account Apple Store",
            "iCloud.com",
        ]},

        {title:"Apple Store",
        link:[
          
            "  Trova uno Store",
             " Genius Bar",
             " Today at Apple",
              "Campo Estivo Apple",
            "  L’app Apple Store",
             " Ricondizionati e fine serie",
             " Finanziamenti",
             " Apple Trade In",
             " Stato dell’ordine",
             " Assistenza agli acquisti"

        ]},
        {title:"Business",
        link:[
          
         "Apple per il business",
         " Acquisti per le aziende"

        ]},
        {title:"Education",
        link:[
          
         " Apple nell’istruzione",
         " Acquisti per l’università"

        ]},

        {title:"Per la salute",
        link:[
          
          "Apple e la salute",
          "Salute su Apple Watch",

        ]},

        {title:"I valori di Apple",
        link:[
         "Accessibilità",
         "Istruzione",
         "Ambiente",
         "Privacy",
         "Responsabilità dei fornitori",
      ]},

      {title:"Info su Apple",
      link:[
        
         "   Newsroom",
           " Leadership Apple",
            "Opportunità di lavoro",
            "Garanzia",
           " Investitori",
           " Etica e rispetto delle norme",
           " Eventi",
           " Posti di lavoro in Europa",
           " Contatti"
 ]}

]
    }
  },

  methods: {
    
  },
}




</script>

<template>
 <footer>
    <div class="footerContainer">
        <ul v-for= "(element, index) in footerElement"
        :key="index">
            <li>
                <h5>
                    {{element.title}}
                </h5>
            </li>
            <li v-for="link in element.link">
              <a href="#"> {{link}}</a>
            </li>
        </ul>
    </div>
 </footer>

  
</template>

<style lang="scss">
@use"./styles/general.scss" as *;
@use"./styles/partial/variables.scss" as *;
footer{
  
    position: relative;
    background-color: grey;
    z-index: 3;

}
.footerContainer{
   
    text-align: start;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
   
}
h5{
    padding: 5px 0px
}
 
ul{
    list-style:none;
    margin:10px;
}

a{
    margin: 5px auto;
    &:hover{
        text-decoration: underline;
    }
}
</style>
