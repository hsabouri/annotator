var image_des = function() {
	this.is_loaded = false;
	this.file_descriptor = null;
	this.file_name = null;
	this.width = null;
	this.height = null;
	this.points = [];
}

var Images = function () {
	this.current_img = 0;
	this.selected_files = [];
	this.images = [];

	this.save_file_list = function(event) {
		selected_files = event.target.files;

		console.log(selected_files);
		for (var i = 0; i < selected_files.length; i++) {
			this.images[i].file_descriptor = selected_files[i];
		}
	};

	this.load = function() {

	}
};