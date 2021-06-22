//const e = require("express");

let url = "http://localhost:3000/api/v1/employees"

const getAllEmployees = () => {
    document.getElementById("result").textContent = '';
    fetch(url)
        .then(x => x.json())
        .then(y => {
            var html = "<table border = '1|1'>";
            html+= "<tr>";
            html+= "<th> ID </th>";
            html+= "<th> Nombre </th>";
            html+= "<th> Apellido </th>";
            html+= "<th> Telefono </th>";
            html+= "<th> Correo </th>";
            html+= "<th> Edad </th>";
            html+= "</tr>";
            y.map(data => {
                console.log("user:", data)

                html += "<tr>";
                html += "<td>" + data.id + "</td>";
                html += "<td>" + data.name + "</td>";
                html += "<td>" + data.last + "</td>";
                html += "<td>" + data.phone + "</td>";
                html += "<td>" + data.mail + "</td>";
                html += "<td>" + data.age + "</td>";
                html += "</tr>";

            })
            html += "</table>";
            document.getElementById("result").innerHTML = html;

        })
}


const getSelEmployees = () => {
    document.getElementById("result").textContent = '';
    const id = document.getElementById("ddEmployees").value
    fetch(url + "/" + id)
        .then(x => x.json())
        .then(y => {
            var html = "<table border = '1|1'>";
            html+= "<tr>";
            html+= "<th> ID </th>";
            html+= "<th> Nombre </th>";
            html+= "<th> Apellido </th>";
            html+= "<th> Telefono </th>";
            html+= "<th> Correo </th>";
            html+= "<th> Edad </th>";
            html+= "</tr>";
            y.map(data => {
                console.log("user:", data)

                html += "<tr>";
                html += "<td>" + data.id + "</td>";
                html += "<td>" + data.name + "</td>";
                html += "<td>" + data.last + "</td>";
                html += "<td>" + data.phone + "</td>";
                html += "<td>" + data.mail + "</td>";
                html += "<td>" + data.age + "</td>";
                html += "</tr>";

            })
            html += "</table>";
            document.getElementById("result").innerHTML = html;

        })
}

const addEmployee = () => {
    document.getElementById("result").textContent = 'Empleado añadido!';
    const id = document.getElementById("inID").value
    const name = document.getElementById("inName").value
    const last = document.getElementById("inLN").value
    const tel = document.getElementById("inTel").value
    const mail = document.getElementById("inMail").value
    const age = document.getElementById("inAge").value
    const employee = { "id": id, "name": name, "last": last, "phone": tel, "mail": mail, "age": age }
    fetch(url, {
        method: "post",
        body: JSON.stringify(employee),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(x => x.json())
    /*.then(y =>
        document.getElementById("result").textContent += JSON.stringify(y))*/;
}

const delEmployees = () => {
    const id = document.getElementById("delEmp").value
    fetch(url + "/" + id,
        { method: "delete" })
        .then(x => x.json())
        .then(y => {
            var html = "<table border = '1|1'>";
            html+= "<tr>";
            html+= "<th> ID </th>";
            html+= "<th> Nombre </th>";
            html+= "<th> Apellido </th>";
            html+= "<th> Telefono </th>";
            html+= "<th> Correo </th>";
            html+= "<th> Edad </th>";
            html+= "</tr>";
            y.map(data => {
                console.log("user:", data)

                html += "<tr>";
                html += "<td>" + data.id + "</td>";
                html += "<td>" + data.name + "</td>";
                html += "<td>" + data.last + "</td>";
                html += "<td>" + data.phone + "</td>";
                html += "<td>" + data.mail + "</td>";
                html += "<td>" + data.age + "</td>";
                html += "</tr>";

            })
            html += "</table>";
            document.getElementById("result").innerHTML = html;

        })
}

const clearScreen = () => {
    document.getElementById("result").textContent = '';
}