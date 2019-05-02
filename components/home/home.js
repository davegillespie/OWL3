function HomeController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('home', {
    template: `
        <section id="home">
            <h3>Home</h3>
            <p>Welcome to OWL!</p>
        </section>`, // or use templateUrl
    controller: HomeController
  });