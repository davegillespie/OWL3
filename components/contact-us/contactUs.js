function ContactUsController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('contactUs', {
    template: `
        <section id="contact-us">
            <h3>Contact Us</h3>
            <p>This is the Contact Us page.</p>
        </section>`, // or use templateUrl
    controller: ContactUsController
  });