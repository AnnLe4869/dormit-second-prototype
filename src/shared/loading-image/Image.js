import CircularProgress from "@material-ui/core/CircularProgress";

import { grey, common } from "@mui/material/colors";
import BrokenImage from "@material-ui/icons/BrokenImage";
import React, { Component, useContext, useState } from "react";
import { createRef } from "react";

/**
 * Images are ugly until they're loaded. Materialize it with material image! It will fade in like the material image loading pattern suggests.
 * @see [Image loading patterns](https://material.io/guidelines/patterns/loading-images.html)
 */

function ModImage(
  alt,
  animationDuration = 3000,
  aspectRatio = 1,
  color = common.white,
  cover,
  disableError = false,
  disableSpinner = false,
  disableTransition = false,
  errorIcon = (
    <BrokenImage style={{ width: 48, height: 48, color: grey[300] }} />
  ),
  iconContainerStyle,
  imageStyle,
  loading = <CircularProgress size={48} />,
  onClick,
  onError,
  onLoad,
  src,
  style,
  ...props
) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = createRef();
  const imageTransition = !disableTransition && {
    opacity: imageLoaded ? 1 : 0,
    filterBrightness: imageLoaded ? 100 : 0,
    filterSaturate: imageLoaded ? 100 : 20,
    transition: `
      filterBrightness ${
        animationDuration * 0.75
      }ms cubic-bezier(0.4, 0.0, 0.2, 1),
      filterSaturate ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1),
      opacity ${animationDuration / 2}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  };

  const styles = {
    root: {
      backgroundColor: color,
      paddingTop: `calc(1 / ${aspectRatio} * 100%)`,
      position: "relative",
      ...style,
    },
    image: {
      width: "100%",
      height: "100%",
      position: "absolute",
      objectFit: cover ? "cover" : "inherit",
      top: 0,
      left: 0,
      ...imageTransition,
      ...imageStyle,
    },
    iconContainer: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      ...iconContainerStyle,
    },
  };

  const handleLoadImage = (e) => {
    setImageError(true);
    setImageLoaded(false);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleImageError = (e) => {
    if (src) {
      setImageError(true);
      if (onError) {
        onError(e);
      }
    }
  };

  useContext(() => {
    const img = image.current;
    if (img && img.complete) {
      // image loaded before the component rendered (e.g. SSR), see #43 and #51
      if (img.naturalWidth === 0) {
        handleImageError();
      } else {
        handleLoadImage();
      }
    }
  });

  return (
    <div style={styles.root} onClick={onClick}>
      {src && (
        <img
          ref={image}
          style={styles.image}
          onLoad={handleLoadImage}
          onError={handleImageError}
          alt={alt}
        />
      )}
      <div style={styles.iconContainer}>
        {!disableSpinner && !imageLoaded && !imageError && loading}
        {!disableError && imageError && errorIcon}
      </div>
    </div>
  );
}

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false,
      imageLoaded: false,
      src: this.props.src,
    };
    this.image = React.createRef();
  }

  componentDidMount() {
    const img = this.image.current;
    if (img && img.complete) {
      // image loaded before the component rendered (e.g. SSR), see #43 and #51
      if (img.naturalWidth === 0) {
        this.handleImageError();
      } else {
        this.handleLoadImage();
      }
    }
  }

  getStyles() {
    const {
      animationDuration,
      aspectRatio,
      cover,
      color,
      imageStyle,
      disableTransition,
      iconContainerStyle,
      style,
    } = this.props;

    const imageTransition = !disableTransition && {
      opacity: this.state.imageLoaded ? 1 : 0,
      filterBrightness: this.state.imageLoaded ? 100 : 0,
      filterSaturate: this.state.imageLoaded ? 100 : 20,
      transition: `
        filterBrightness ${
          animationDuration * 0.75
        }ms cubic-bezier(0.4, 0.0, 0.2, 1),
        filterSaturate ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1),
        opacity ${animationDuration / 2}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
    };

    const styles = {
      root: {
        backgroundColor: color,
        paddingTop: `calc(1 / ${aspectRatio} * 100%)`,
        position: "relative",
        ...style,
      },
      image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        objectFit: cover ? "cover" : "inherit",
        top: 0,
        left: 0,
        ...imageTransition,
        ...imageStyle,
      },
      iconContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        ...iconContainerStyle,
      },
    };

    return styles;
  }

  handleLoadImage = (e) => {
    this.setState({ imageLoaded: true, imageError: false });
    if (this.props.onLoad) {
      this.props.onLoad(e);
    }
  };

  handleImageError = (e) => {
    if (this.props.src) {
      this.setState({ imageError: true });
      if (this.props.onError) {
        this.props.onError(e);
      }
    }
  };

  render() {
    const styles = this.getStyles();

    const {
      animationDuration,
      aspectRatio,
      color,
      cover,
      disableError,
      disableSpinner,
      disableTransition,
      errorIcon,
      iconContainerStyle,
      imageStyle,
      loading,
      onClick,
      style,
      alt,
      ...image
    } = this.props;

    return (
      <div style={styles.root} onClick={onClick}>
        {image.src && (
          <img
            {...image}
            ref={this.image}
            style={styles.image}
            onLoad={this.handleLoadImage}
            onError={this.handleImageError}
            alt={alt}
          />
        )}
        <div style={styles.iconContainer}>
          {!disableSpinner &&
            !this.state.imageLoaded &&
            !this.state.imageError &&
            loading}
          {!disableError && this.state.imageError && errorIcon}
        </div>
      </div>
    );
  }
}

Image.defaultProps = {
  animationDuration: 3000,
  aspectRatio: 1,
  color: common.white,
  disableError: false,
  disableSpinner: false,
  disableTransition: false,
  errorIcon: (
    <BrokenImage style={{ width: 48, height: 48, color: grey[300] }} />
  ),
  loading: <CircularProgress size={48} />,
};
