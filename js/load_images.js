/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   load_images.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hsabouri <hsabouri@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/28 00:18:01 by hsabouri          #+#    #+#             */
/*   Updated: 2017/06/28 01:16:59 by hsabouri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var Image_des = function() {
	this.is_loaded = false;
	this.file_descriptor = null;
	this.file_type = null;
	this.file_name = null;
	this.width = null;
	this.height = null;
	this.points = [];
	this.scale = null;
	this.element = null;
}

var Images = function () {
	var _current_img = 0;
	var _selected_files = [];
	var _images = [];
	var _is_image_loaded = false;

	var _unload = function(image_id) {
		_images[_current_img].scale = null;
		_images[_current_img].element = null;
		_images[_current_img].is_loaded = false;
	}

	var _load = function(image_id, callback) {
		var file_reader = new FileReader();

		file_reader.onload = function() {
			var img = new Image();

			img.src = file_reader.result;

			_images[image_id].element = img;
			_images[image_id].width = img.width;
			_images[image_id].height = img.height;

			_images[image_id].scale = window.innerHeight / img.height;

			if (window.innerWidth < img.width * _images[image_id].scale) {
				_images[image_id].scale = window.innerWidth / img.width;
			}

			_images[image_id].is_loaded = true;

			_unload(_current_img);
			_current_img = image_id;

			callback(_images[image_id]);
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