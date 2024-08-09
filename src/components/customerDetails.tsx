import React, { useEffect, useState } from "react";
import "../components/styles/photogrid.css";
import { Customer } from "../type";

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!customer) return;

    // Function to fetch random photos based on customer
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const photoUrls = [];
        // Fetch 9 different random images
        for (let i = 0; i < 9; i++) {
          const response = await fetch(
            `https://picsum.photos/seed/${Math.random()}/800/600`
          );
          photoUrls.push(response.url); // Add the URL of the fetched image
        }
        setPhotos(photoUrls);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetching photos immediately
    fetchPhotos();

    // Set interval to fetch new set of photos every 10 seconds
    const intervalId = setInterval(fetchPhotos, 10000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [customer]);

  if (!customer) {
    return (
      <div className="customer-details">
        <h1>Select a customer to view details</h1>
      </div>
    );
  }

  return (
    <div className="customer-details">
      <h2>{customer.name} Details here</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>
        ----------------------------Bio of the
        customer-------------------------------
      </p>

      {loading ? (
        <div className="loading-message">Wait, photos are loading...</div>
      ) : (
        <div className="photo-grid">
          {photos.slice(0, 9).map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
//added one more cmnt
//added this
