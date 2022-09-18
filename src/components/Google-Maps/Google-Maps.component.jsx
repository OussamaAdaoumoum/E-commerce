import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const center = useMemo(() => ({ lat: 31.6298, lng: -8.0101 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="w-52 h-36 dark:bg-white bg-white  rounded-md ">
      <Marker position={center} />
    </GoogleMap>
  );
}
export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    
  });

  if (!isLoaded) return <div className="text-white">Loading...</div>;
  return <Map />;
}

