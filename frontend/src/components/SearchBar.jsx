import { useState } from "react";
import {
  Button,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({onSearch}) {
  const [input, setInput] = useState("");

const handleSubmit=(e)=>{
  e.preventDefault()

  if(!input.trim())return;

  onSearch(input)
}


  return (
    <Paper
      elevation={8}
      sx={{
        p: 2,
        display: "flex",
        gap: 2,
        alignItems: "center",
        background:
          "linear-gradient(135deg, #10251f 0%, #0c1815 100%)",
        border: "1px solid rgba(16,185,129,0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <TextField
        fullWidth
        placeholder="Ask about a stock..."
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "14px",
            color: "white",
          },
          "& input": {
            color: "white",
          },
        }}
      />

      <Button
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        onClick={handleSubmit}
        sx={{
          px: 4,
          borderRadius: "14px",
          background:
            "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        }}
      >
      </Button>
    </Paper>
  );

}
export default SearchBar;