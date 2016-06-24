function alertIsprobavanje(){

$(document).ready(function(){

	$("#tbody").on("click", ".clickme", function() {
    window.alert('molim te');
});


});

}
function deleteRow(){

	$(document).ready(function(){
		var table = $('#myTable').DataTable();
    $('#myTable tbody').on('click', '#haosic', function(){
    table 
        .row( $(this).parents('tr') ).remove().draw( false );

    });
	});
    

}
function objasni(item){
	console.log(item);
}
