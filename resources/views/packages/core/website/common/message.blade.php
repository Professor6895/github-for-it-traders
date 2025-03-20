@if (session('message'))
    <script>
        window.onload = function() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "{{ session('message') }}",
                showConfirmButton: false,
                timer: 3000
            })

        }

    </script>
@endif
@if (session('success'))
    <script>
        window.onload = function() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "{{ session('success') }}",
                showConfirmButton: false,
                timer: 3000
            })

        }

    </script>
@endif
@if (session('error'))
    <script>
        window.onload = function() {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "{{ session('error') }}",
                showConfirmButton: false,
                timer: 3000
            })
        }

    </script>
@endif
