import React, { useState, useRef } from "react";

import { Skeleton, Box, Fade } from "@mui/material";

/**
 * Images are ugly until they're loaded. Materialize it with material image! It will fade in like the material image loading pattern suggests.
 * @see [Image loading patterns](https://material.io/guidelines/patterns/loading-images.html)
 */

export function Image({ image }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1/1",
            cursor: "pointer",
            borderRadius: "16px",
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
            }}
          />
        </Box>
      )}
      <Fade in={loaded}>
        <img src={image} onLoad={() => setLoaded(true)} />
      </Fade>
    </>
  );
}
