<script>
import axios from 'axios';
export default {

  
name:
'AppBoolfolio',
data(){
    return{
      base_url:'http://127.0.0.1:8000',
      boolfolio:'',
      menuItems: [
        { label: 'Home', routeName: 'home' },
        { label: 'Boolfolio', routeName: 'Boolfolio' },
        { label: 'About', routeName: 'About' },
      ],
    }
  },
  mounted(){

axios.get('http://127.0.0.1:8000/api/boolfolio')
.then(response=>{
  console.log(response);
  this.boolfolio = response.data.boolfolio
})

}




}
</script>

<template>
<h1>Boolfolio</h1>
<div class="container mb-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col" v-for="boolfolio in boolfolio.data">
      <div class="card h-100">
        <div class="card-body">

          <template v-if="!boolfolio.cover_image.startsWith('http')">
            <img class="card-img-top" :src="base_url + '/storage/' + boolfolio.cover_image"  alt=""
          loading="lazy">
          </template>
          <template v-else="">
            <img class="card-img-top" :src=" boolfolio.cover_image"  alt=""
            loading="lazy">
          </template>
          
          {{ boolfolio.nome }}

         </div>
      </div>
    </div>
  </div>
</div>

</template>

<style >


</style>