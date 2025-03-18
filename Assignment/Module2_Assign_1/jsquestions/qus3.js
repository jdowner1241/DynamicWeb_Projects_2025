$(document).ready(function() {
    $('#employeeTableQue3').DataTable({
        "ajax": {
            "url": "./json/MOCK_DATA.json", 
            "dataSrc": "" 
        },
        "columns": [
            { "data": "id" },
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "email" },
            { "data": "department" },
            { "data": "salary" }
        ]
    });
});