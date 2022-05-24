import Swal from "sweetalert2"
import { deletePhoto } from "../services/Photos.services"

export default function DeletePhoto(id) {
  Swal.fire({
    title: "Are you sure?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      deletePhoto(id).then((data) => {
        if (data.photo._id) {
          Swal.fire({
            title: "Successful",
            text: "Photo deleted successfully",
            icon: "success",
            timer: 3000,
          })
          setTimeout(() => {
            window.location.reload(false)
          }, 1300)
        } else {
          if (data.error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              timer: 3500,
            })
          }
        }
      })
    }
  })

  return null
}
