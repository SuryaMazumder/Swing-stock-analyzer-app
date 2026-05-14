import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function StockCard({ data }) {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #10251f 0%, #0a1512 100%)",
        border: "1px solid rgba(16,185,129,0.2)",
        boxShadow: "0 0 30px rgba(16,185,129,0.15)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4">
              {data.companyName}
              <Typography
                component="span"
                sx={{
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "gray",
                  ml: 1,
                }}
              >
                ({data.sector})
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography color="gray" variant="h5">
                Business Overview
              </Typography>

              <Typography>{data.Analysis.businessOverview}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box>
              <Typography color="gray" variant="h5">
                Valuation Metrics
              </Typography>

              <Typography>{data.Analysis.valuationMetrics}</Typography>
            </Box>
          </Grid>
    
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="gray" variant="h5">
              Risks
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {data.Analysis.risks.map((risks, index) => (
                <Typography
                  component="li"
                  key={index}
                  sx={{
                    mb: 1,
                    color: "#d1fae5",
                  }}
                >
                  {risks}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="gray" variant="h5">
              Financial Performance
            </Typography>

            <Typography>{data.Analysis.financialPerformance}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="gray" variant="h5">
              Strengths
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {data.Analysis.strengths.map((strength, index) => (
                <Typography
                  component="li"
                  key={index}
                  sx={{
                    mb: 1,
                    color: "#d1fae5",
                  }}
                >
                  {strength}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
        </Grid>
      </CardContent>

      <Box
        mt={5}
        sx={{
          background:
            "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.08) 100%)",
          border: "1px solid rgba(16,185,129,0.35)",
          borderRadius: "20px",
          p: 4,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 25px rgba(16,185,129,0.15)",
        }}
      >
        {/* Glow Effect */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "rgba(16,185,129,0.18)",
            filter: "blur(50px)",
          }}
        />

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "#34d399",
            letterSpacing: 1,
          }}
        >
          📈 Analyst Outlook
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#d1fae5",
            lineHeight: 1.9,
            fontSize: "1rem",
          }}
        >
          {data.Analysis.analystOutlook}
        </Typography>

        <Box mt={3} display="flex" gap={2} flexWrap="wrap">
          <Box
            sx={{
              px: 2,
              py: 1,
              borderRadius: "12px",
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            <Typography variant="body2" sx={{ color: "#6ee7b7" }}>
              Rating :{data.rating}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default StockCard;
