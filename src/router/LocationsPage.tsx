import canadaDesktopImage from "../../public/assets/locations/desktop/image-map-canada.png";
import australiaDesktopImage from "../../public/assets/locations/desktop/image-map-australia.png";
import ukDesktopImage from "../../public/assets/locations/desktop/image-map-united-kingdom.png";

import canadaTabletImage from "../../public/assets/locations/tablet/image-map-canada.png";
import australiaTabletImage from "../../public/assets/locations/tablet/image-map-australia.png";
import ukTabletImage from "../../public/assets/locations/tablet/image-map-uk.png";
import PageFooter from "../components/PageFooter";

import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";

const LocationsPage = () => {
  return (
    <div className="locations-page container">
      <ul className="locations-map-list flex">
        <li id="canada" className="location-map-item grid ">
          <div className="location-map-item-content grid col">
            <h2 className="location-name h2 txt-peach">Canada</h2>
            <div className="location-adress">
              <p className="fw-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="location-contact">
              <p className="fw-bold">Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
          <MapContainer
            center={[45.46512455349618, -73.56660843479276]}
            zoom={10}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[45.46512455349618, -73.56660843479276]} />
          </MapContainer>
        </li>
        <li id="australia" className="location-map-item grid ">
          <div className="location-map-item-content grid col">
            <h2 className="location-name h2 txt-peach">Australia</h2>
            <div className="location-adress">
              <p className="fw-bold">Designo AU Office</p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className="location-contact">
              <p className="fw-bold">Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
          <div className="col">
            <MapContainer
              center={[-27.587292810058162, 152.72313202023952]}
              zoom={10}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-27.587292810058162, 152.72313202023952]} />
            </MapContainer>
          </div>
        </li>
        <li id="uk" className="location-map-item grid ">
          <div className="location-map-item-content grid col">
            <h2 className="location-name h2 txt-peach">United Kingdom</h2>
            <div className="location-adress">
              <p className="fw-bold">Designo UK Office</p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className="location-contact">
              <p className="fw-bold">Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
          <div className="col">
            <MapContainer
              center={[53.71036737328045, -1.3418351285056824]}
              zoom={10}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[53.71036737328045, -1.3418351285056824]} />
            </MapContainer>
          </div>
        </li>
      </ul>
      <PageFooter />
    </div>
  );
};

export default LocationsPage;
