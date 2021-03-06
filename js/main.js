function image_to_canvas(coord, image) {
	var ret = {};

	ret.x = coord.x * image.scale;
	ret.y = coord.y * image.scale;

	return (ret);
}

function canvas_to_image(coord, image) {
	var ret = {};

	ret.x = coord.x / image.scale;
	ret.y = coord.y / image.scale;

	return (ret);
}

function	coord_close(coord1, coord2)
{
	var		close_min = 5;

	return (Math.abs(coord1.x - coord2.x) <= close_min &&
		Math.abs(coord1.y - coord2.y) <= close_min);
}

function	coord_round(coord)
{
	return ({x: Math.round(coord.x), y: Math.round(coord.y)});
}

function update_image_id_element(id, total) {
	var image_id_element = document.getElementById("image_id");

	image_id_element.innerHTML = id + "/" + total;
}

function main()
{	
	var input_files = document.getElementById("input_files");
	var canvas_element = document.getElementById("canvas");
	var save_element = document.getElementById("save_json");
	var filename_element = document.getElementById("filename");
	var canvas_manager = new Canvas_manager(canvas_element);
	var images = new Images();

	input_files.onchange = function (event) {
		input_files.style.display = "none";
		images.save_file_list(event);
		images.load(0, function(image) {
			canvas_manager.set_canvas_properties({
				width: image.width * image.scale,
				height: image.height * image.scale
			});
		});
	};

	var interval = setInterval(function () {
		canvas_manager.update_canvas(images);
	}, 1000/60);

	canvas_element.addEventListener('click', function (event) {
		canvas_manager.canvas_on_click({x: event.pageX, y: event.pageY}, images)
	}, false);

	save_element.addEventListener('click', function (event) {
		save_images(images, filename_element.value + ".json");
	}, false);

	document.addEventListener('keydown', function(event) {
		if (event.key == "ArrowLeft") {
			images.change_image(-1);
		}

		if (event.key == "ArrowRight") {
			images.change_image(1);
		}
	});
}

window.onload = main;
