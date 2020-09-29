<template>    
<v-app id="inspire">
    <v-card class="mx-auto" max-width="344" outlined >
      <v-list-item v-if="contactDetails.data">
        <v-avatar tile size="80"> <v-img height="100%" :src="contactDetails.data.avatar"></v-img></v-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{contactDetails.data.first_name}}</v-list-item-title>
          <v-list-item-subtitle>{{contactDetails.data.last_name}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{contactDetails.data.email}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{contactDetails.ad.company}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{contactDetails.ad.url}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{contactDetails.ad.text}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-app>
</template>
<script>
// import axios from 'axios';
import {mapState} from 'vuex';

export default {
  data:function() { 
      return {
        // data: {},
        // ads:{}
      }
  },
  mounted() {
    // this.asyncData();
    this.$store.dispatch('contactDetails',{id:this.$route.params.id})
  },
  computed:{
...mapState([
      'contactDetails'
    ])
  },
  methods: {
  //   async asyncData () {
  //   let { data} = await axios.get('https://reqres.in/api/users/' + this.$route.params.id)
  //   this.data = data.data;
  //   this.ads = data.ad;
  //  }
  
 } 
}

</script>