<script >

import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Section2 from './components/Section2.vue'
import Section3 from './components/Section3.vue'
import Panel from './components/Panel.vue'
import Panel2 from './components/Panel2.vue'
import Footer from './components/Footer.vue'



export default{

  data() {
    return {
    }
  },
 
  methods: {
  
  },

  components:{
    Header,
    Section,
    Section2,
    Section3,
    Panel,
    Panel2,
    Footer
  }
  
}

</script>

<template>
 <header>
  
  <Header/>
 
</header>
 <main>
    <video class="video-bg" src="./assets/video.mp4" autoplay loop muted></video>
    <Section/>
    
    <Section2/>
    
    <Section3/>
    
    <Panel/>
    
    <Panel2/>
    
 </main>
 <Footer/>
</template>

<style lang="scss" scoped>
  @use"./components/styles/general.scss" as *;
  @use"./components/styles/partial/variables.scss" as *;

</style>
