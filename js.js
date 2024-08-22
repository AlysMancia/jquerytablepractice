$(document).ready(function() {
    let users = [
        {
            "id": "1",
            "firstname": "Brian",
            "lastname": "Walker"
        },
        {
            "id": "2",
            "firstname": "Conna",
            "lastname": "Walker"
        }
    ];

    $.each(users, function(index, user) {
        let row = `<tr>
                    <td>${user.id}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                   </tr>`;
        $('#usersTable tbody').append(row);
    });
});