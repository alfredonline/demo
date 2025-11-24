import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const properties = [
  {
    id: "london-1",
    title: "Cozy Room in Central London",
    rating: 4.5,
    hostType: "Individual Host",
    price: "$90 for 2 nights",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1763827513396-5917fc6c84f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wifi", "Kitchen", "Washer"],
    description: "Bright, quiet room a short walk from the tube.",
  },
  {
    id: "barcelona-1",
    title: "Sunny Flat Near Las Ramblas",
    rating: 4.1,
    hostType: "Individual Host",
    price: "$120 for 2 nights",
    location: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1763197970981-b64c911263e9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Air conditioning", "Kitchen", "Elevator"],
    description: "Charming sunny flat steps from the city center and beaches.",
  },
  {
    id: "nyc-1",
    title: "Stylish Studio in Manhattan",
    rating: 4.7,
    hostType: "Superhost",
    price: "$150 for 2 nights",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    bedrooms: 0,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wifi", "Smart TV", "Heating"],
    description: "Compact, well-equipped studio in the heart of Manhattan.",
  },
  {
    id: "tokyo-1",
    title: "Modern Apartment in Shinjuku",
    rating: 4.6,
    hostType: "Individual Host",
    price: "$130 for 2 nights",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    bedrooms: 1,
    bathrooms: 1,
    guests: 3,
    amenities: ["Wifi", "Kitchen", "Elevator"],
    description: "Clean, modern apartment minutes from Shinjuku station.",
  },
  {
    id: "paris-1",
    title: "Charming Room with Eiffel View",
    rating: 4.3,
    hostType: "Superhost",
    price: "$140 for 2 nights",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["Wifi", "Heating", "Iron"],
    description: "Cozy room with a partial view of the Eiffel Tower.",
  },
];

export default function Home() {
  return (
    <div className="p-4 text-red-500 text-md">
      {/* <Link href="/test-page">Go to test page</Link> */}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {properties.map((property) => (
          <PropertyCard 
            title={property.title}
            image={property.image}
            rating={property.rating}
            price={property.price}
            location={property.location}
            hostType={property.hostType}
            key={property.id}
          />
        ))}
      </div>
    </div>
  );
}
