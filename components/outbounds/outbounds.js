function OutboundsController() {
    var ctrl = this;
}
  
angular.module('MySite').component('outbounds', {
  template: `
      <section id="outbounds">
          <h3>Outbounds</h3>
          <p>Welcome to OWL!</p>


          <div class="mainarticle2">
          <div id="map"></div>
          <div id="right-panel">
          <div>
          <b>Start:</b>
          <input id="start" type="text" />
          <br>
        
          <b>Waypoints:</b><br>
          <input class="waypoints" /><br>
          <input class="waypoints" /><br>
          <input class="waypoints" /><br>
          <input class="waypoints" /><br>
          <b>End:</b>
          <input id="end" type="text" />
          <br>
            <input type="submit" id="submit">
          </div>
          <div id="directions-panel"></div>
          </div>   


        </div>

      </section>`, // or use templateUrl
  controller: OutboundsController
});