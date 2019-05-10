function ShipmentsController(OrdersService) {
    let ctrl = this;
// }

ctrl.shipments = OrdersService.shipments;

console.log(ctrl.shipments);

}

angular.module('MySite').component('shipments', {
  template: `
      <section id="shipments">
        <div class="insideheader"> 
        <h3>Shipments</h3>  
            <ul class="insideheader-nav">       
                <li><button class="btnDispatch">Book Dispatch</button></li> 
                <li><button class="btnSomething">Something</button></li>       
            </ul>   
        </div>
        <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th>Rate</h>
                <th>Pickup Name</th>
                <th>Close</th>
            </tr>
        <thead>
            
        <tbody>
            <tr ng-repeat="detail in $ctrl.shipments">
                <td>
                <button ng-if="detail.expanded" ng-click="detail.expanded = false">-</button>
                <button ng-if="!detail.expanded" ng-click="detail.expanded = true">+</button>
                </td>
                <td><input type="checkbox" /></td>
                <td><button class="btnRate">$2000</button></td>
                <td> {{ detail }}  </td>
                <td> x </td>
            </tr>
            <tr ng-if="detail.expanded" ng-repeat-end="">
                <td></td>
                <td></td>
                <td></td>
                <td>Test</td>
                <td></td>
            </tr>
         </tbody>   
        </table>
        
        
      
        </section>`, // or use templateUrl
  controller: ShipmentsController,
  bindings: {
    post: '<',
    addToWatchList: '&',
    removeFromWatchList: '&'
  }

})