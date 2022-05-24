import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import {
  ImageMarked,
  ImageBackdrop,
  Image,
  ImageSrc,
  ImageButton,
} from "./BoxPhotosElements"

const BoxElement = (props) => {
  const images = props.regions
  let navigate = useNavigate()

  function GoRegion(id) {
    navigate(`/regions/${id}`)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.name}
          style={{
            width: "33.33%",
          }}
          href=""
          onClick={() => {
            GoRegion(image._id)
          }}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${image.src})`,
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.name}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  )
}

export default BoxElement
