import React, { useState, useEffect } from "react";
import "./Carrousel.css";

const Carousel = () => {
  const images = ["images/portada-1.jpg", "images/portada-2.jpg", "images/portada-3.jpg"];
  const [index, setIndex] = useState(0); // Estado para controlar la imagen activa

  // Cambiar a la siguiente imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Ciclo infinito
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Image ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
