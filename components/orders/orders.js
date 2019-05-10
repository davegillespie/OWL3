function OrdersController($scope, OrdersService) {
    // var $scope = this;
    $scope.processForm = function() {
        // execute something
        $scope.showTheForm = false;
    }

    $scope.details = [
        {
            pufacilityname: $scope.shipment  
        }
    ];

    // $scope.shipment = {
    //     details: $scope.detail
    //   };

    $scope.addToShipmentsList = (details) => {
        console.log("working", $scope.details);
        OrdersService.addToShipmentsList($scope.details);
    }

    $scope.removeDetail = function(detail) {
        var removedDetail = $scope.details.indexOf(detail);
        $scope.details.splice(removedDetail, 1);
      }
  
      $scope.addDetail = function() {
        $scope.details.push({
          pufacilityname: $scope.newdetail.pufacilityname
 
        });
      }
  
    //   $scope.details = [];

        // $scope.user = {
        //     details: [$scope.details[1]]
        //   };
    }


    
      
   

  
angular
    .module('MySite')
    .component('orders', {
        template: `
            <section id="orders">
                <div class="insideheader"> 
                    <h3>Orders</h3>  
                    <ul class="insideheader-nav">       
                        <li><button ng-click="showTheForm = !showTheForm" class="btnCreate">Create Order</button></li> 
                        <li><button class="shipmentbtn" ng-click="addToShipmentsList(detail)">Create Shipment</button></li>       
                    </ul>   
                </div>
            
            <form class="create-order" ng-submit="addDetail()" ng-show="showTheForm" ng-submit="processForm()">
            
                <h4>NEW ORDER:</h4>
                <p>Pickup Details:</p>
                
                    <input type="text" placeholder="Facility Name" ng-model="newdetail.pufacilityname"/>
                
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
                        
                            <th>Close</th>
                    </thead>
                    <tbody>
                        </tr>
                        <tr ng-repeat="detail in details" >
                            <td><input type="checkbox" data-checklist-model="shipment.details" data-checklist-value="detail"/></td>
                            <td> {{ detail.pufacilityname }} </td>
                                      
                            <td><div class="remove" ng-click="removeDetail(detail)">x</div></td>
                        </tr>
                    </tbody>
                </table>
            </section>`, // or use templateUrl 20
        controller: OrdersController
        });