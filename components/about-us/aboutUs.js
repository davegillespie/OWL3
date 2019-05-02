function AboutUsController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('aboutUs', {
    template: `
        <section id="about-us">
            <h3>About Us</h3>
            <p>This Works!</p>
        </section>`, // or use templateUrl
    controller: AboutUsController
  });