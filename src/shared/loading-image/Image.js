import React, { useState } from "react";
import { Skeleton, Box, Fade } from "@mui/material";

/**
 * Images are ugly until they're loaded. Materialize it with material image! It will fade in like the material image loading pattern suggests.
 * @see [Image loading patterns](https://material.io/guidelines/patterns/loading-images.html)
 */

export function Image({ image, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (
        <Box sx={{ aspectRatio: "1/1" }}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              height: "100%",
              borderRadius: "16px",
            }}
            {...props}
          />
        </Box>
      )}
      <Fade in={loaded}>
        <img src={image} onLoad={() => setLoaded(true)} {...props} />
      </Fade>
    </>
  );
}
