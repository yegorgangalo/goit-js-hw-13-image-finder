const keyAPI = '19532775-cd1fec64673db4c80a00103d2';

export default {
page: 1,
searchQuery: '',

get query(){
  return this.searchQuery;
},

set query(value){
  this.searchQuery = value;
},

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
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${this.page}&per_page=6&key=${keyAPI}`;
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
}