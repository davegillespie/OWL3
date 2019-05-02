function OrdersController($scope) {
    // var $scope = this;
    $scope.processForm = function() {
        // execute something
        $scope.showTheForm = false;
    }

        $scope.createShipment = () => {
            // Call service createShipment function
            // On Success redirect to Shipments Route
            // On Failure alert or console.log err
        }

    $scope.removeDetail = function(detail) {
        var removedDetail = $scope.details.indexOf(detail);
        $scope.details.splice(removedDetail, 1);
      }
  
      $scope.addDetail = function() {
        $scope.details.push({
          pufacilityname: $scope.newdetail.pufacilityname,
          puaddress: $scope.newdetail.puaddress,
          pucity: $scope.newdetail.pucity,
          pustate: $scope.newdetail.pustate,
          puzip: $scope.newdetail.puzip,
          puphone: $scope.newdetail.puphone,
          puemail: $scope.newdetail.email,
          quantity: $scope.newdetail.quantity,
          unit: $scope.newdetail.unit,
          weight: $scope.newdetail.weight,
          trailer: $scope.newdetail.trailer,
          temperature: $scope.newdetail.temperature,
          size: $scope.newdetail.size,
          delfacitlityname: $scope.newdetail.delfacitlityname,
          deladdress: $scope.newdetail.deladdress,
          delcity: $scope.newdetail.delcity,
          delstate: $scope.newdetail.delstate,
          delzip: $scope.newdetail.delzip,
          delphone: $scope.newdetail.delphone,
          delemail: $scope.newdetail.delemail
        });
      }
  
      $scope.details = [
          {
            pufacilityname: 'NCF',
            puaddress: '5303 Ave',
            pucity: 'GR',
            pustate: 'MI',
            puzip: '49506',
            puphone: '123-456-7890',
            puemail: 'blah',
            quantity: '25',
            unit: 'cases',
            weight: '30000',
            trailer: 'Dry Van',
            temperature: '40',
            size: 'FTL',
            delfacitlityname: 'NCF',
            deladdress: '5303 Ave',
            delcity: 'Comstock Park',
            delstate: 'MI',
            delzip: '49506',
            delphone: '321-654-0987',
            delemail: 'blahblah'
          }
        ];
        // $scope.user = {
        //     details: [$scope.details[1]]
        //   };
    }


    
      
   

  
angular.module('MySite').component('orders', {
  template: `
      <section id="orders">
        <div class="insideheader"> 
            <h3>Orders</h3>  
            <ul class="insideheader-nav">       
                <li><button ng-click="showTheForm = !showTheForm" class="btnCreate">Create Order</button></li> 
                <li><button class="shipmentbtn" ng-click="">Create Shipment</button></li>       
            </ul>   
        </div>
    
    <form class="create-order" ng-submit="addDetail()" ng-show="showTheForm" ng-submit="processForm()>
       
        <input type="text" placeholder="" ng-model=""/>

        <h4>NEW ORDER:</h4>
        <p>Pickup Details:</p>
            <input type="text" placeholder="Facility Name" ng-model="newdetail.pufacilityname"/>
            <input type="text" placeholder="Address" ng-model="newdetail.puaddress"/>
            <input type="text" placeholder="City" ng-model="newdetail.pucity"/>
            <input type="text" placeholder="State" ng-model="newdetail.pustate"/>
            <input type="text" placeholder="Zip" ng-model="newdetail.puzip"/>
            <input type="text" placeholder="Phone" ng-model="newdetail.puphone"/>
            <input type="text" placeholder="Email" ng-model="newdetail.puemail"/>
        
        <p>Freight Details:</p>
            <input type="text" placeholder="Quantity" ng-model="newdetail.quantity"/>
            <input type="text" placeholder="Unity Type" ng-model="newdetail.unit"/>
            <input type="text" placeholder="Weight" ng-model="newdetail.weight"/>
            <input type="text" placeholder="Trailer" ng-model="newdetail.trailer"/>
            <input type="text" placeholder="Temperature" ng-model="newdetail.temperature"/>
            <input type="text" placeholder="Size" ng-model="newdetail.size"/>
        
        <p>Delivery Details:</p>
            <input type="text" placeholder="Facility Name" ng-model="newdetail.delfacitlityname"/>
            <input type="text" placeholder="Address" ng-model="newdetail.deladdress"/>
            <input type="text" placeholder="City" ng-model="newdetail.delcity"/>
            <input type="text" placeholder="State" ng-model="newdetail.delstate"/>
            <input type="text" placeholder="Zip" ng-model="newdetail.delzip"/>
            <input type="text" placeholder="Phone" ng-model="newdetail.delphone"/>
            <input type="text" placeholder="Email" ng-model="newdetail.delemail"/>
            <br>
            <br>
            <input type="submit" value="SUBMIT" />
            <input type="button" ng-click="showTheForm = false" value="CANCEL" />
        </form>

        <br>
            
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Pickup Name</th>
                    <th>Address</th> 
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th> 
                    <th>Phone</th>
                    <th>Email</th>

                    <th>Quantity</th>
                    <th>Unit</th> 
                    <th>Weight</th>
                    <th>Trailer</th>
                    <th>Temperature</th> 
                    <th>Size</th>

                    <th>Delivery Name</th>
                    <th>Address</th> 
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th> 
                    <th>Phone</th>
                    <th>Email</th>

                    <th>Close</th>
            </thead>
            <tbody>
                </tr>

                <tr ng-repeat="detail in details" checklist-model="detail.roles" checklist-value="role" ng-model="shipmentSubmit()">
                    <td><input type="checkbox" /></td>
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

                    <td> {{ detail.delfacilityname }} </td>
                    <td> {{ detail.deladdress }} </td>
                    <td> {{ detail.delcity }} </td>
                    <td> {{ detail.delstate }} </td>
                    <td> {{ detail.delzip }} </td>
                    <td> {{ detail.delphone }} </td>
                    <td> {{ detail.delemail }} </td>


                    <td><div class="remove" ng-click="removeDetail(detail)">x</div></td>
                </tr>
            </tbody>
        </table>

      </section>`, // or use templateUrl 20
  controller: OrdersController
});