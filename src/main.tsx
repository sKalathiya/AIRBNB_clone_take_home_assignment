import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";
import { assets } from "./assets/asset";

const airbnbCereal = new FontFace(
  "Airbnb Cereal VF",
  `url(${assets.fonts.airbnbCerealVf})`,
  {
    weight: "200 900",
    style: "normal",
    display: "swap",
  },
);

void airbnbCereal.load().then((face) => {
  document.fonts.add(face);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
