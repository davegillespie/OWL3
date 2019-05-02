function ShipmentsController($scope) {
    // var ctrl = this;
// }

    $scope.details = [
        {
        pufacilityname: 'Hillshire',
        puaddress: '5303 Ave',
        pucity: 'Ft Worth',
        pustate: 'TX',
        puzip: '90001',
        puphone: '123-456-7890',
        puemail: 'email',
        quantity: '1000',
        unit: 'Cases',
        weight: '20000',
        trailer: 'Reefer',
        temperature: '40',
        size: 'LTL',

        pufacilityname2: 'Kraft',
        puaddress2: '123',
        pucity2: 'Dallas',
        pustate2: 'TX',
        puzip2: '90009',
        puphone2: '123-456-7890',
        puemail2: 'email',
        quantity2: '1000',
        unit2: 'Cases',
        weight2: '20000',
        trailer2: 'Reefer',
        temperature2: '40',
        size2: 'LTL'

     
        },
        {
        pufacilityname: 'Smithfield',
        puaddress: '21 SE St',
        pucity: 'Crete',
        pustate: 'NE',
        puzip: '70001',
        puphone: '123-456-7890',
        puemail: 'email',
        quantity: '1000',
        unit: 'Cases',
        weight: '20000',
        trailer: 'Reefer',
        temperature: '0',
        size: 'LTL',

        pufacilityname2: 'Smithfield',
        puaddress2: '430 SW Ave',
        pucity2: 'Monmouth',
        pustate2: 'IL',
        puzip2: '50009',
        puphone2: '123-456-7890',
        puemail2: 'email',
        quantity2: '1000',
        unit2: 'Cases',
        weight2: '20000',
        trailer2: 'Reefer',
        temperature2: '0',
        size2: 'LTL'
       
        }
    ];


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

        <br>

      <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th>Rate</h>
                <th>Pickup Name</th>
                <th>Address</th> 
                <th>City</th>
                <th>State</th>
                <th>Zip</th> 
                <th>Phone</th>
                <th>Email</th>
                <th>Quantity</th>
                <th>Units</th>
                <th>Weight</th>
                <th>Trailer</th>
                <th>Temp</th>
                <th>Size</th>
                <th>Close</th>
            </tr>
        <thead>
            
        <tbody>
            <tr ng-repeat-start="detail in details">
                <td>
                <button ng-if="detail.expanded" ng-click="detail.expanded = false">-</button>
                <button ng-if="!detail.expanded" ng-click="detail.expanded = true">+</button>
                </td>
                <td><input type="checkbox" /></td>
                <td><button class="btnRate">$2000</button></td>
                <td> {{ detail.pufacilityname }} </td>
                <td> {{ detail.puaddress }} </td>
                <td> {{ detail.pucity }} </td>
                <td> {{ detail.pustate }} </td>
                <td> {{ detail.puzip }} </td>
                <td> {{ detail.puphone }} </td>
                <td> {{ detail.puemail }} </td>

                <td> {{ detail.quantity}} </td>
                <td> {{ detail.unit }} </td>
                <td> {{ detail.weight }} </td>
                <td> {{ detail.trailer }} </td>
                <td> {{ detail.temperature }} </td>
                <td> {{ detail.size }} </td>

                <td><div class="remove" ng-click="removeDetail(detail)">x</div></td>
            </tr>

            <tr ng-if="detail.expanded" ng-repeat-end="">
                <td></td>
                <td></td>
                <td></td>
                <td> {{ detail.pufacilityname2 }} </td>
                <td> {{ detail.puaddress2 }} </td>
                <td> {{ detail.pucity2 }} </td>
                <td> {{ detail.pustate2 }} </td>
                <td> {{ detail.puzip2 }} </td>
                <td> {{ detail.puphone2 }} </td>
                <td> {{ detail.puemail2 }} </td>

                <td> {{ detail.quantity2 }} </td>
                <td> {{ detail.unit2 }} </td>
                <td> {{ detail.weight2 }} </td>
                <td> {{ detail.trailer2 }} </td>
                <td> {{ detail.temperature2 }} </td>
                <td> {{ detail.size2 }} </td>
            </tr>
         </tbody>   
        </table>


      </section>`, // or use templateUrl
  controller: ShipmentsController
})
