import React, { Component } from "react";
import ReactMapboxGl, { Layer, ZoomControl, ScaleControl, Marker, Cluster, Popup } from "react-mapbox-gl";
import places from '../datajson/places.json';

 const Map = ReactMapboxGl({
   accessToken:
    "pk.eyJ1IjoibGlxdWlkZnV6eiIsImEiOiJjajg0dmtvaXIwYnduMzNxcHl2cDMyaTRqIn0.sfSI9XDqkdJX2zFlIRtEfw",

    //  scrollZoom: false
 });

 const styles = {
   value:"mapbox://styles/mapbox/light-v9",

   clusterMarker:{
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundColor: '#51D5A0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      border: '2px solid #56C498',
      cursor: 'pointer'
   },
   marker: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundColor: '#E0E0E0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #C9C9C9'
   }
 };

//  const StyledPopup = styled.div`
//    background: white;
//    color: #3F618C;
//    font-weight: 400;
//    padding: 5px;
//    border-radius: 2px;
// `;

 const mapStyle = {
   height: "100vh",
   width: "100vw"
 }

 class Mapper extends Component {
   constructor(props) {
     super(props);

    this.state ={
       popup: null,
       center: [-95.366302, 29.761993]
    }

   }

  //  onMarkerClick (coords, feature) {
  //    console.log(coords);
  //    this.setState({
  //      center: feature.geometry.coordinates,
  //      zoom: [14]
  //    })
  //  }

   onMarkerClick (coords) {
     console.log(coords);
    //  this.setState({
    //    center: feature.geometry.coordinates,
    //    zoom: [14]
    //  })
   }


   clusterMarker = (coordinates, pointCount) => (
     <Marker coordinates={coordinates} key={coordinates.toString()} style={styles.clusterMarker}>
       { pointCount }
     </Marker>
   )

   render() {
     return (
       <div>
         <Map
           style={styles.value}
           zoom={[2]}
           containerStyle={mapStyle}
           center={[-95.366302, 29.761993]}
           interactive={true}
         >
           <Cluster ClusterMarkerFactory={this.clusterMarker} clusterThreshold={8}>
             {
               places.features.map((feature, key) =>
               <Marker
                 key={key}
                 style={styles.marker}
                 coordinates={feature.geometry.coordinates}
                 onClick={this.onMarkerClick.bind(this, feature.geometry.coordinates)}>
                 M

{/*
               <Popup
                 coordinates={feature.geometry.coordinates}
                 offset={{
                   'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                 }}>
                 <h1>Popup</h1>
               </Popup> */}

              </Marker>
                )
              }
           </Cluster>

           <ZoomControl />
           <ScaleControl />

           <Layer
             type="symbol"
             id="marker"
             layout={{"icon-image": "marker-15"}}
           >
             {/* <Feature coordinates={[29.761993, -95.366302]} /> */}
           </Layer>
         </Map>
       </div>
     );
   }
 }

 export default Mapper;
