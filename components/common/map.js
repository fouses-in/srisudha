// components/CompanyMap.js
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const CompanyMap = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 13.078372,
    lng: 80.2466496,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCEOPMk8L4uOpB3OkPuNmesW_wWwDM_XB8">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default CompanyMap;
