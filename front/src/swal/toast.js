import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
   
})

export { Toast }