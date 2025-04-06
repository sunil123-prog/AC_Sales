import React, { useState } from "react";
import Footer from "../Components/Footer"
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Chip,
} from "@mui/material";

// Spare parts data
const spareParts = [
  { id: 1, name: "Blue Star Window AC Fan Motor 1.5 Ton", brand: "Blue Star", type: "Fan Motor", price: "₹3,500", originalPrice: "₹3,650",image: "https://acservicecentre.in/images/products/pimage1_1981303312.webp" },
  { id: 2, name: "Hitachi Window AC Blower 1 Ton", brand: "Hitachi", type: "Blower", price: "₹900", originalPrice: "₹950", image:"https://www.accareindia.com/images/products/product_838837730.webp" },
  { id: 3, name: "Hitachi Window AC Blower 1.5 Ton", brand: "Hitachi", type: "Blower", price: "₹1,050", originalPrice: "₹1,100", image:"https://www.accareindia.com/images/products/product_838837730.webp" },
  { id: 4, name: "Hitachi Window AC Blower 2 Ton", brand: "Hitachi", type: "Blower", price: "₹1,150", originalPrice: "₹1,200", image:"https://www.accareindia.com/images/products/product_838837730.webp" },
  { id: 5, name: "Godrej Window AC Blower 2 Ton", brand: "Godrej", type: "Blower", price: "₹1,150", originalPrice: "₹1,200", image: "https://tse1.mm.bing.net/th?id=OIP.MeQta1amymKlmGfnneRv3QHaEg&pid=Api&P=0&h=180" },
  { id: 6, name: "Carrier Window AC Blower 1 ton (8.5x4.5 inch)", brand: "Carrier", type: "Blower", price: "₹950", originalPrice: "₹1,000", image: "https://tse3.mm.bing.net/th?id=OIP.jtA-jUrzz71glUg_lYvBnQHaEg&pid=Api&P=0&h=180" },
  { id: 7, name: "Lloyd Split AC Indoor Blower 1 Ton inside Bush", brand: "Lloyd", type: "Blower", price: "₹1,800", originalPrice: "₹2,000", image: "https://www.accareindia.com/images/products/product_1668394903.webp" },
  { id: 8, name: "Daikin Split AC Outdoor Fan Blade 0.8 Ton", brand: "Daikin", type: "Fan Blade", price: "₹1,100", originalPrice: "₹1,500", image: "https://www.accareindia.com/images/products/product_1153742818.webp" },
  { id: 9, name: "Daikin Split AC Outdoor Fan Blade 1.8 ton", brand: "Daikin", type: "Fan Blade", price: "₹1,100", originalPrice: "₹1,400", image: "https://www.accareindia.com/images/products/product_592391010.webp" },
  { id: 10, name: "LG 1 Ton Rotary Compressor R22", brand: "LG", type: "Compressor", price: "₹8,400", originalPrice: "₹9,000", image: "https://www.accareindia.com/images/products/product_988147729.webp" },
  { id: 11, name: "Hitachi 1 Ton Rotary Compressor Highly R22", brand: "Hitachi", type: "Compressor", price: "₹7,800", originalPrice: "₹8,000", image: "https://www.accareindia.com/images/products/product_1436750377.webp" },
  { id: 12, name: "Hitachi 1.5 Ton Rotary Compressor Highly R22", brand: "Hitachi", type: "Compressor", price: "₹8,400", originalPrice: "₹9,000", image: "https://www.accareindia.com/images/products/product_1528819394.webp" },
  { id: 13, name: "Hitachi 2 Ton Rotary Compressor Highly R22", brand: "Hitachi", type: "Compressor", price: "₹9,900", originalPrice: "₹10,000", image: "https://www.accareindia.com/images/products/product_1366136154.webp" },
  { id: 14, name: "Copper Tube 5/8 & 3/8 inch with insulation (Set of 2 Rolls)", brand: "Generic", type: "Copper Tube", price: "₹10,500", originalPrice: "₹12,000", image: "https://www.accareindia.com/images/products/product_257669041.webp" },
  { id: 15, name: "Copper Coupling Socket 1-1/4 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹725", originalPrice: "₹800", image:"https://www.accareindia.com/images/products/product_1820720361.webp" },
  { id: 16, name: "Copper Coupling Socket 1-1/8 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹660", originalPrice: "₹800", image: "https://www.accareindia.com/images/products/product_1820720361.webp" },
  { id: 17, name: "Copper Coupling Socket 7/8 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹525", originalPrice: "₹699" , image: "https://www.accareindia.com/images/products/product_293167765.webp" },
  { id: 18, name: "Copper Coupling Socket 3/4 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹449", originalPrice: "₹599" , image: "https://www.accareindia.com/images/products/product_1803088280.webp"},
  { id: 19, name: "Copper Coupling Socket 5/8 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹349", originalPrice: "₹499", image: "https://www.accareindia.com/images/products/product_1778994191.webp" },
  { id: 20, name: "Copper Coupling Socket 3/8 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹235", originalPrice: "₹499", image: "https://www.accareindia.com/images/products/product_1360544045.webp" },
  { id: 21, name: "Copper Coupling Socket 1/4 inch (Pack of 10)", brand: "Generic", type: "Coupling", price: "₹195", originalPrice: "₹299", image: "https://www.accareindia.com/images/products/product_465776413.webp" },
  { id: 22, name: "Copper Elbow 1-3/8 inch 90 deg. (Pack of 10)", brand: "Generic", type: "Elbow", price: "₹949", originalPrice: "₹1,199", image: "https://www.accareindia.com/images/products/product_1302802506.webp" },
  { id: 23, name: "Copper Elbow 3/4 inch 90 deg. (Pack of 10)", brand: "Generic", type: "Elbow", price: "₹495", originalPrice: "₹595" , image: "https://www.accareindia.com/images/products/product_908469962.webp"},
  { id: 24, name: "Copper Elbow 7/8 inch 90 deg. (Pack of 10)", brand: "Generic", type: "Elbow", price: "₹590", originalPrice: "₹699", image: "https://www.accareindia.com/images/products/product_246665223.webp" },
  { id: 25, name: "AC Insulation Tube", brand: "Generic", type: "Insulation", price: "₹390", originalPrice: "₹390", image: "https://www.accareindia.com/images/products/product_1455463365.webp" },
  { id: 26, name: "Dupont R32 Refrigerant Gas 7.5 kg", brand: "Dupont", type: "Refrigerant", price: "₹5,299", originalPrice: "₹5,599", image: "https://www.accareindia.com/images/products/product_1439324460.webp" },
  { id: 27, name: "Dupont R410A Refrigerant Gas 8 kg", brand: "Dupont", type: "Refrigerant", price: "₹4,399", originalPrice: "₹4,400", image: "https://www.accareindia.com/images/products/product_1148664963.webp" },
  { id: 28, name: "Dupont R404A Refrigerant Gas 7.5 kg", brand: "Dupont", type: "Refrigerant", price: "₹4,149", originalPrice: "₹4,500", image: "https://www.accareindia.com/images/products/product_818957142.webp" },
];

// Unique filter values
const brands = ["All", ...Array.from(new Set(spareParts.map(p => p.brand)))];
const types = ["All", ...Array.from(new Set(spareParts.map(p => p.type)))];

const ACSpareParts = () => {
  const [brandFilter, setBrandFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredParts = spareParts.filter(part => {
    const matchesBrand = brandFilter === "All" || part.brand === brandFilter;
    const matchesType = typeFilter === "All" || part.type === typeFilter;
    return matchesBrand && matchesType;
  });

  return (
    <>
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>AC Spare Parts</Typography>

      {/* Filters */}
      <Typography variant="subtitle1">Filter by Brand:</Typography>
      {brands.map(b => (
        <Button
          key={b}
          variant={brandFilter === b ? "contained" : "outlined"}
          onClick={() => setBrandFilter(b)}
          style={{ marginRight: 10, marginBottom: 10 }}
        >
          {b}
        </Button>
      ))}

      <Typography variant="subtitle1">Filter by Type:</Typography>
      {types.map(t => (
        <Button
          key={t}
          variant={typeFilter === t ? "contained" : "outlined"}
          onClick={() => setTypeFilter(t)}
          style={{ marginRight: 10, marginBottom: 20 }}
        >
          {t}
        </Button>
      ))}

      {/* Parts List */}
      <Grid container spacing={3} style={{ marginTop: 20, width: "100%", display: "flex" }}>
        {filteredParts.length ? filteredParts.map(part => (
          <Grid item xs={12} sm={6} md={4} key={part.id}>
            <Card elevation={4}>
            {part.image && (
                  <CardMedia
                    width="100%"
                    component="img"
                    height="180"
                    image={part.image}
                    alt={part.name}
                  />
                )}
              <CardContent>
                <Typography variant="h6" gutterBottom>{part.name}</Typography>
                <Chip label={part.brand} style={{ marginRight: 5 }} />
                <Chip label={part.type} color="primary" />
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  <span style={{ textDecoration: "line-through", color: "#888" }}>{part.originalPrice}</span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>{part.price}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )) : (
          <Typography variant="body1">No spare parts found with selected filters.</Typography>
        )}
      </Grid>

      
    </div>


    <Footer />

    </>
    
  );
};

export default ACSpareParts;
