function OrdersService() {
    const service = this;

       /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */

    service.shipments = [];
    // service.shipment= [];

    service.addToShipmentsList = (detail) => {
      console.log(detail);
      service.shipments.push(detail);

    //   if (service.isInShipmentsList(details) !== false) {
    //     console.log("already in ShipmentsList");
    //   }
    //   else {
    //     service.shipments.push(details);
    //   }
        console.log(`current order list: ${detail}`);
      }
    
    };

   

angular.module('MySite')
.service('OrdersService', OrdersService); 