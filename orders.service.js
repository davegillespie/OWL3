function OrdersService() {
    const service = this;

       /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */

    service.shipments = [];
    // service.shipment= [];

    service.addToShipmentsList = (details) => {
      console.log(details);
      service.shipments.push(details);

    //   if (service.isInShipmentsList(details) !== false) {
    //     console.log("already in ShipmentsList");
    //   }
    //   else {
    //     service.shipments.push(details);
    //   }
        console.log(`current order list: ${details}`);
      }
    
    };

   

angular.module('MySite')
.service('OrdersService', OrdersService); 