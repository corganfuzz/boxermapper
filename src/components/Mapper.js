import React, { Component } from "react";
import ReactMapboxGl, { Layer, ZoomControl, ScaleControl } from "react-mapbox-gl";

 const Map = ReactMapboxGl({
   accessToken:
    "pk.eyJ1IjoibGlxdWlkZnV6eiIsImEiOiJjajg0dmtvaXIwYnduMzNxcHl2cDMyaTRqIn0.sfSI9XDqkdJX2zFlIRtEfw",  
    //  scrollZoom: false
 });

 const styles = {
   value:"mapbox://styles/mapbox/light-v9"
 };

 class Mapper extends Component {
   render() {
     return (
       <div>
         <Map
           style={styles.value}
           zoom={[2]}
           containerStyle={{
             height: "100vh",
             width: "100vw",
           }}
           center={[-95.366302, 29.761993]}
           interactive={true}
         >
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
