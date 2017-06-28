// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   main.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: etrobert <etrobert@student.42.fr>          +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2017/06/28 01:35:11 by etrobert          #+#    #+#             //
//   Updated: 2017/06/28 01:59:17 by etrobert         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function update_canvas(context_element, images)
{
	//print image TODO
	context_element.fillStyle = "blue";
	context_element.fillRect(0, 0, 100, 100);

	//print crosses
	crosses = images.get_current_img_des().points;
	context.beginPath();
	for (var i = 0; i < crosses.length; ++i)
	{
		var cross = crosses[i];
		print_fancy_cross(context, cross.x, cross.y);
	}
	context.closePath();
}

function canvas_on_click(event, images)
{
	images.get_current_img_des().points.push({x: event.pageX, y: event.pageY});
}

function main()
{
	var images = new Images();
	var input_files = document.getElementById("input_files");
	var canvas_element = document.getElementById("canvas");
	var renderer = new Renderer(canvas_element);

	input_files.onchange = function (event) {
		images.save_file_list(event);
		images.load(1, function(image) {
			renderer.set_canvas_properties(
				{width: image.width * image.scale,
				height: image.height * image.scale});
			renderer.display_image(image);
		});
	};
	var interval = setInterval(
		function () { update_canvas(context_element, images); },
		1000/60);

	canvas.addEventListener('click',
		function (event) { canvas_on_click(event, crosses) }, false);

	update_canvas(context, crosses);
}

window.onload = main;
