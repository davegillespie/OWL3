function WarehousesController
() {
    var ctrl = this;
}
  
angular.module('MySite').component('warehouses', {
  template: `
      <section id="warehouses">
          <h3>Warehouses</h3>
          <p>Welcome to OWL!</p>
      </section>`, // or use templateUrl
  controller: WarehousesController

});