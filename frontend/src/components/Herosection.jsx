import { Box, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
      }}
    >
      <img
        src="/stock-bull.png"
        alt="stock"
        style={{
          width: "180px",
          marginBottom: "20px",
        }}
      />

      <Typography variant="h3" gutterBottom>
        AI Stock Market Assistant
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#9ca3af",
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        Ask anything about stocks, trends, company performance,
        technical analysis, and market insights.
      </Typography>
    </Box>
  );
}

export default HeroSection;