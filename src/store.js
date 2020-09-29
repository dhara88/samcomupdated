import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex,axios);

const url = 'https://reqres.in/api/users/';

export default new Vuex.Store({

    state: {
        contacts: [],
        contactDetails:[],
        errors:[]
    },
    getters: {
     
    },
    mutations: {
        SET_CONTACTS(state,contacts){
            state.contacts = contacts

        },
        SET_CONTACTDETAILS(state,contactDetails){
            state.contactDetails = contactDetails
        }
     
    },
    actions: {
        loadContacts({commit}){
        axios.get(url)
            .then(response => {
            let contacts = response.data.data;
            commit('SET_CONTACTS',contacts)
            })
            .catch(e => {
            this.errors.push(e)
            })
        },
        contactDetails({commit},{id}){
            axios.get(url + id )
                .then(response => {
                let contactDetails = response.data;
                commit('SET_CONTACTDETAILS',contactDetails)
                })
                .catch(e => {
                this.errors.push(e)
                })
            },
            
    }
  });
  