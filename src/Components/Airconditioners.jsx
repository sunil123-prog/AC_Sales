import React, { useState } from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Chip,
} from "@mui/material";
import Footer from "./Footer";

// All Air Conditioner Data
const airConditioners = [
  {
    id: 1,
    brand: "LG",
    type: "Split",
    tonnage: "1.5T",
    starRating: "5 Star",
    model: "LG Cool 1.5T",
    cost: "₹38,990",
    image: "https://w4heatingandcooling.com/wp-content/uploads/2021/03/LG-Mini-Split-768x768.jpg",
  },
  {
    id: 2,
    brand: "Daikin",
    type: "Window",
    tonnage: "1T",
    starRating: "3 Star",
    model: "Daikin ChillPro 1T",
    cost: "₹32,500",
    image: "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/10/17/1412d96a5ded2ff3fcd2922aef291e5e.jpg",
  },
  {
    id: 3,
    brand: "Samsung",
    type: "Split",
    tonnage: "2T",
    starRating: "5 Star",
    model: "Samsung WindFree 2T",
    cost: "₹49,900",
    image: "https://mundodoaredarefrigeracao.com.br/wp-content/uploads/2020/12/wind-free-Revista-1.jpg",
  },
  {
    id: 4,
    brand: "Voltas",
    type: "Split",
    tonnage: "1.5T",
    starRating: "3 Star",
    model: "Voltas TurboCool 1.5T",
    cost: "₹34,800",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cfe87c75-252a-4a53-b316-046ef195ed04.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  },
  {
    id: 5,
    brand: "Daikin",
    type: "Split",
    tonnage: "1.5T",
    starRating: "5 Star",
    model: "Daikin SmartCool",
    cost: "₹44,800",
    image: "https://media.karousell.com/media/photos/products/2023/3/27/daikin_dsmart_series_inverter__1679919222_5bebe355_progressive.jpg",
  },
  {
    id: 6,
    brand: "Lloyd",
    type: "Split",
    tonnage: "1.5T",
    starRating: "3 Star",
    model: "Lloyd Arctic Cool",
    cost: "₹34,500",
    image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706601585/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/304553_4_rzc4be.png",
  },
  {
    id: 7,
    brand: "LG",
    type: "Window",
    tonnage: "1T",
    starRating: "5 Star",
    model: "LG FreshAir 1T",
    cost: "₹30,000",
    image: "https://www.lg.com/levant_en/images/air-conditioning-units/md06241196/gallery/1100-1.jpg",
  },
  {
    id: 8,
    brand: "Lloyd",
    type: "Split",
    tonnage: "2T",
    starRating: "3 Star",
    model: "Lloyd MaxCool 2T",
    cost: "₹51,900",
    image: "https://images.herzindagi.info/image/2024/Apr/lloyd-1.5-ton-ac.jpg",
  },
];

const brands = ["All", "LG", "Daikin", "Samsung", "Voltas", "Lloyd"];
const tonnages = ["All", "1T", "1.5T", "2T"];
const starRatings = ["All", "3 Star", "5 Star"];

const AirConditioners = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedTonnage, setSelectedTonnage] = useState("All");
  const [selectedStar, setSelectedStar] = useState("All");

  const filteredACs = airConditioners.filter((ac) => {
    const matchBrand = selectedBrand === "All" || ac.brand === selectedBrand;
    const matchTonnage = selectedTonnage === "All" || ac.tonnage === selectedTonnage;
    const matchStar = selectedStar === "All" || ac.starRating === selectedStar;
    return matchBrand && matchTonnage && matchStar;
  });

  return (
    <>
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Air Conditioners
      </Typography>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="subtitle1">Filter by Brand:</Typography>
        {brands.map((brand) => (
          <Button
            key={brand}
            variant={selectedBrand === brand ? "contained" : "outlined"}
            onClick={() => setSelectedBrand(brand)}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            {brand}
          </Button>
        ))}

        <Typography variant="subtitle1">Filter by Tonnage:</Typography>
        {tonnages.map((ton) => (
          <Button
            key={ton}
            variant={selectedTonnage === ton ? "contained" : "outlined"}
            onClick={() => setSelectedTonnage(ton)}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            {ton}
          </Button>
        ))}

        <Typography variant="subtitle1">Filter by Star Rating:</Typography>
        {starRatings.map((star) => (
          <Button
            key={star}
            variant={selectedStar === star ? "contained" : "outlined"}
            onClick={() => setSelectedStar(star)}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            {star}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <Grid container spacing={3}>
        {filteredACs.length ? (
          filteredACs.map((ac) => (
            <Grid item xs={12} sm={6} md={4} key={ac.id} sx={{ display: "flex" }}>
              <Card
                elevation={4}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={ac.image}
                  alt={ac.model}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>{ac.model}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Brand: {ac.brand} | Type: {ac.type}
                  </Typography>
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <Chip label={ac.tonnage} color="info" style={{ marginRight: "10px" }} />
                    <Chip label={ac.starRating} color="success" />
                  </div>
                  <Typography variant="body1" color="primary" fontWeight="bold">
                    Cost: {ac.cost}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ ml: 2 }}>
            No air conditioners match the selected filters.
          </Typography>
        )}
      </Grid>
    </div>

    <Footer />
    </>
  );
};

export default AirConditioners;
