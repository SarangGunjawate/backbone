import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function WithLoader(WrappedComponent) {
  return function WihLoadingComponent(props) {
    const [isLoading, setLoading] = useState(false);
    const setLoadingState = (isComponentLoading) => {
      // console.log('ssssssssss', isComponentLoading)
      setLoading(isComponentLoading);
    };
    return (
      <>
        {isLoading && (
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              opacity: 0.8,
              position: "absolute",
              margin: "auto",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "secondary.main",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  };
}
