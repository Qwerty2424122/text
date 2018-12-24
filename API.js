
const url = "https://www.hatchways.io/api/assessment/students";

const vm = new Vue({
        el: '#app1',
        data: {
          results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
      });



