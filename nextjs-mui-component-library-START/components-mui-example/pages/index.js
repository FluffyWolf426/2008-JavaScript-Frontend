import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main>
      <Container maxWidth="sm">
        <Box sx={{ p: 2, border: "1px dashed grey" }}>
          <Typography variant="h2"> Take a Look at this</Typography>
        </Box>
      </Container>
    </main>
  );
}
