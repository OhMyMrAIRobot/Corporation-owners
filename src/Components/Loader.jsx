import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress
                size={70}
            />
        </Box>
    );
}