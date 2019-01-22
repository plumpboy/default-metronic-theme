$(document).ready(function() {
	var options = {
	    filebrowserImageBrowseUrl: '/admin/filemanager?type=Images',
	    filebrowserImageUploadUrl: '/admin/filemanager/upload?type=Images&_token=',
	    filebrowserBrowseUrl: '/admin/filemanager?type=Files',
	    filebrowserUploadUrl: '/admin/filemanager/upload?type=Files&_token='
  	};
  	CKEDITOR.on('dialogDefinition', function(ev) {
	    var dialogName = ev.data.name,
	        dialogDefinition = ev.data.definition;
	    if (dialogName === 'image') {
	        dialogDefinition.removeContents('Upload');
	    }
	});
  	CKEDITOR.replace('m_ckeditor_1', options);
});