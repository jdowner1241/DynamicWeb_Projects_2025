new DataTable("#productTable", {
    ajax: "products.json",
    columns: [
        { data: "id" },
        { data: "name" },
        { data: "category" },
        { data: "price" }
        
    ],
    processing: true
});

$.ajax({
        url: "./json/products.json",      
        success: function(data) {
        console.log(data);
        //return data;             
        }
    });