function alertIsprobavanje(){

$(document).on("click", ".clickme", function() {
    window.alert('molim te');
});

}
function deleteRow(){

	// $(document).ready(function(){
	// 	var table = $('#myTable').DataTable();
 //    $('#myTable tbody').on('click', '#haos', function(){
 //    table 
 //        .row( $(this).parents('tr') ).remove().draw( false );

 //    });
	// });
	$(document).ready(function(){

		$(document.body).on("click", "#haosic", function(){
			window.alert('JEBEM TI MATER BRE');
		});
	});
    

}
function deleteRows(){


	$(document).ready(function() {
    var table = $('#myTable').DataTable();
 
    $('#myTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#haosic').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );
}

function jtm(){

	$(document).ready(function() {
    
		$(document).on('click', '#haosic', function(){
			window.alert('klikic');
		});
    });

}
