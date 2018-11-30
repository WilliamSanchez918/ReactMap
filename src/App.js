import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {


  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    window.initMap = this.initMap
    loadScript("http://maps.googleapis.com/maps/api/js?key=AIzaSyDbEbQmlU5f6FfbiDnxoo2ehgTo6Btoug0&callback=initMap")
    
  }

  getVenues = () => {
    const requestUrl = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "5KDK3ZLPU4TW1ONM0P51R5RE4NISRVH3MOZ2NXJ50UH4QMCL",
      client_secret: "CISKHMBHD3CPHEKY0VGFDUGQQXYRLRXPCLN2PHKMKPI41523",
      query: "food",
      near: "Sydney",
      v: "20181129"
    }

    axios.get(requestUrl +new URLSearchParams(params))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())

    })
    .catch(error => {
      console.log('Broke' + error)
    })
  }



  initMap = () => {
    // Spawn a map from the ether
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    })

    // Info Window Creation
    var infowindow = new window.google.maps.InfoWindow();
    
    this.state.venues.map(myVenue => {

      let contentString = `${myVenue.venue.name} Address${myVenue.venue.location.address} city${myVenue.venue.location.city}`


      // Marker
      let marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      });


      marker.addListener('click', function() {

        //update Content
        infowindow.setContent(contentString)

        //Open InfoWindow
        infowindow.open(map, marker);
      });

    })
  }


  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}



function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index)
  
}

export default App;
