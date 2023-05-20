$(document).ready(function () {

    let edit = false;
    fetchTasks();

    $('#user-form').submit(function (e) {
        e.preventDefault(); // Evita la redirección predeterminada del enlace
        //close modal
        document.querySelector(".login-box").classList.remove("animate__fadeInDown")
        document.querySelector(".login-box").classList.add("animate__fadeOutDown")
        setTimeout(() => {
            document.querySelector(".login-box").classList.remove("animate__fadeOutDown")
            document.querySelector(".login-box").classList.add("animate__fadeInDown")
            document.querySelector(".div-modal").style.cssText = "display:none;"
        }, 300);

        let postData = {
            id: $('#id').val(),
            nombre_completo: $('#nombre-completo').val(),
            edad: $('#edad').val(),
            dni: $('#dni').val(),
            email: $('#edad').val(),
            archivo: $('#input-file').val()
        };
        console.log(postData);

        let url = 'agregar.php';

        $.ajax({
            url: url,
            type: 'POST',
            data: postData,
            success: function (response) {
                edit = false;
                fetchTasks();
                $('#user-form').trigger('reset');
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
                $('#user-form').trigger('reset');
            }
        });
    });

    function fetchTasks() {
        $.ajax({
            url: 'consulta.php',
            type: 'GET',
            success: function (response) {
                let users = JSON.parse(response);
                let template = '';
                users.forEach(user => {
                    template += `
                    <tr>
                        <td> ${user.id} </td>
                        <td> <img src="images/${user.archivo}" alt="">${user.nombre_completo}</td>
                        <td> ${user.edad} </td>
                        <td> ${user.dni} </td>
                        <td>
                            ${user.email}
                        </td>
                    </tr>
                `;
                });

                $('#cuerpo').html(template);
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
            }
        })
    }
});