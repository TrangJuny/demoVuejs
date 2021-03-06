import './style.scss';
import Vue from 'vue';

import VueResource from 'vue-resource'
import moment from 'moment-timezone'
//component
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

Vue.use(VueResource);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype,'$moment',{get(){

    console.log('test');
    console.log(this);
    console.log(this.$root);
    return this.$root.moment;thuytrang.mis93@gmail.com
}});
new Vue({
    el:'#app',
    data:{
        genre:[],
        time:[],
        movies:[],
        moment,
        day:moment(),
    },
    methods: {
        checkFilter (category,title,checked) {
            if(checked){
                this[category].push(title)
            }else{
                let index =this[category].indexOf(title);
                if(index>-1) this[category].splice(index,1);
            }
        }
    },
    components:{
        MovieList,
        MovieFilter,
    },
    created(){
        this.$http.get('/api').then(res=>{
            this.movies = res.data;
        });
    }
    
});