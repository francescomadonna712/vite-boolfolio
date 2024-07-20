<script >
import axios from 'axios';

export default {

  
  name:
  
  'App',


  data(){
    return{
      base_url:'http://127.0.0.1:8000',
      boolfolio:''
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
<h1>welcome</h1>
<div class="container">
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


<nav aria-label="Page navigation">
  <ul
    class="pagination    "
  >
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>


</template>

<style >

</style>
