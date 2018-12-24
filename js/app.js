
var myview = new Vue({
         el: "#app",
         data: {
             firstname: 'Bhaarta',
             lastname : 'sharma'
         },
         
         methods:{
                mydetails:  function() {

                    return "I am " +this.firstname +" and "+ this.lastname;  
                }

         }

 });