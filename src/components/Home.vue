<template>    
<v-app id="inspire" >
    <v-card class="mx-auto" max-width="344" outlined v-for="contact in contacts" :key="contact.id" @click="redirect(contact.id)">
      <v-list-item >      
        <v-avatar tile size="80"> <v-img height="100%" :src="contact.avatar"></v-img></v-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{contact.first_name}}</v-list-item-title>
          <v-list-item-subtitle>{{contact.last_name}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{contact.email}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-app>  
</template>
<script>
import {mapState} from 'vuex';
export default {
// data:function() { 
//       return {
//         contacts: [],
//         errors: [],
//     }
//   },
computed: {
    // sortedArray: function() {
    // function compare(a, b) {
    //     if (a.name < b.name)
    //     return -1;
    //     if (a.name > b.name)
    //     return 1;
    //     return 0;
    // }    
    // return this.contacts.sort(compare);
    // }
    ...mapState([
      'contacts'
    ])
}, 
mounted() {
  this.$store.dispatch('loadContacts');
    
  },
methods: {
    redirect(id){    
        this.$router.push({name: 'ContactDetails', params: { id: id }});
    },
  }
}
</script>
<style>
</style>
