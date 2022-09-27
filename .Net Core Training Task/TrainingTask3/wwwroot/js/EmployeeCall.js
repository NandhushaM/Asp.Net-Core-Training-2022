$.get("https://localhost:7201/api/Employee/GetEmployee", function (data, status) {

    if (data) {
        let code = ""
        for (let x in data) {
            code += "<tr>"
            code += "<td>" + data[x].Name + "</td>"
            code += "<td>" + data[x].Email + "</td>"
            code += "<td>" + data[x].Manager + "</td>"
            code += "<td>" + data[x].Wfm_Manager + "</td>"
            code += "<td>" + data[x].Status + "</td>"

            code += "</tr>"
        }
        $("#tdata").html(code)
    }

})