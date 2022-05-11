import { SatelliteAlt } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";


export default (params) => {
    const { currentUserAllListedPropties } = useSelector(state => state.mainReducer)
    return (
        <Box>
              <h1>profile</h1>
        </Box>
    )
};
