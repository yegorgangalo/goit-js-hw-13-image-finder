const keyAPI = '19532775-cd1fec64673db4c80a00103d2';
/* ------------Axios-------------------- */
import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=${keyAPI}`;
//axios.defaults.headers.common['Autorization'] = `Bearer ${token}`; //ось так додаються заголовки
/* -------------Axios end------------------- */

export default {
_page: 1,
per_page: 15,
searchQuery: '',
// staticURLQuery:`https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=${keyAPI}`,

fetchFirst(queryValue) {
  this.resetPage();
  this.query = queryValue;
  return this.fetchQuery(this.query);
},

fetchMore() {
  this.incrementPage();
  return this.fetchQuery(this.query);
},

async fetchQuery (query) {
  const url = `&q=${query}&page=${this.page}&per_page=${this.perPage}`;
  const {data} = await axios.get(url);
  return data;
},
// async fetchQuery (query) {
//   try {
//     const url = `${this.staticURLQuery}&q=${query}&page=${this.page}&per_page=${this.perPage}`;
//     const response = await fetch(url);
//     return response.json();
//   } catch (error) {
//     console.log(`%c${error}`, 'color: red; font-size: 16px;');
//     throw error;
//   }
// },
//fetchQuery (query) {
  // const url = `${this.staticURLQuery}&q=${query}&page=${this.page}&per_page=${this.perPage}`;
  // return fetch(url)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .catch(console.error);
// },

resetPage() {
  this.page = 1;
  },

incrementPage() {
  this.page += 1;
},

get page(){
  return this._page;
},
set page(value){
  this._page = value;
},

get perPage(){
  return this.per_page;
},
set perPage(value){
  this.per_page = value;
},

get query(){
  return this.searchQuery;
},
set query(value){
  this.searchQuery = value;
},
}