import { Box, Container } from "@mui/material";
import HeroSection from "../components/Herosection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import StockCard from "../components/Stockcard.jsx";
import { useState } from "react";

function Home() {

  const [stockData,setStockData]=useState(null);
  const [loading,setLoading]=useState(false);

  const handleSearch=async (prompt)=>{
    try {
      console.log(prompt)
      setLoading(true);
      const response=await fetch('http://localhost:5050/api/stock',{
        method:"POST",
        headers:{
          "Content-Type":'application/json'
        },
        body:JSON.stringify({prompt})
      })

      const data=await response.json();

      setStockData(data)
    } catch (error) {
      console.log("API ERROR",error)
    }finally{
      setLoading(false)
    }
  }
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          py: 4,
        }}
      >
      

    
            {loading && <p>Loading...</p>}
        <Box mt={5}>
          {stockData?(<StockCard data={stockData}/>):(<HeroSection/>)}
        </Box>
        
        <Box mt={4}>
          <SearchBar onSearch={handleSearch}/>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;