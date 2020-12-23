const keyAPI = '19532775-cd1fec64673db4c80a00103d2';

export default {
_page: 1,
per_page: 15,
searchQuery: '',
staticURL: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',

fetchFirst(queryValue) {
  this.resetPage();
  this.query = queryValue;
  return this.fetchQuery(this.query);
},

fetchMore() {
  this.incrementPage();
  return this.fetchQuery(this.query);
},

fetchQuery(query) {
  const url = `${this.staticURL}&q=${query}&page=${this.page}&per_page=${this.perPage}&key=${keyAPI}`;
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(console.error);
},

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