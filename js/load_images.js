var Image_des = function() {
	this.is_loaded = false;
	this.file_descriptor = null;
	this.file_type = null;
	this.file_name = null;
	this.width = null;
	this.height = null;
	this.points = [];
}

var Images = function () {
	var _current_img = 0;
	var _selected_files = [];
	var _images = [];
	var _is_image_loaded = false;

	var _load = function(image_id) {
		var file_reader = new FileReader();

		file_reader.onload = function() {
			var img = new Image();

			img.src = file_reader.result;
			document.body.appendChild(img);
		};

		file_reader.readAsDataURL(_images[image_id].file_descriptor);
	}
	this.load = _load;

	this.save_file_list = function(event) {
		_selected_files = event.target.files || window.event.srcElement.files;

		console.log(_selected_files);
		for (var i = 0; i < _selected_files.length; i++) {
			_images[i] = new Image_des();
			_images[i].file_descriptor = _selected_files[i];
			_images[i].file_name = _selected_files[i].name;
			_images[i].file_type = _selected_files[i].type;
		}

		_is_image_loaded = true;
		_load(0);
	};

	this.get_current_img = function() {
		return (_current_img);
	};

	this.set_current_img = function(value) {
		if (value >= 0 && value < _images.length) {
			_current_img = value;
		} else {
			throw "Can't set _current_img to " + value + ": out of bounds.";
		}
	};

	this.get_images = function() {
		return (_images);
	};
};