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

function main()
{
	var images = new Images();
	var input_files = document.getElementById("input_files");
	var canvas_element = document.getElementById("canvas");
	var canvas_manager = new Canvas_manager(canvas_element);

	input_files.onchange = function (event) {
		images.save_file_list(event);
		images.load(1, function(image) {
			canvas_manager.set_canvas_properties(
				{
					width: image.width * image.scale,
					height: image.height * image.scale
				});
		});
	};

	var interval = setInterval(
		function () { canvas_manager.update_canvas(images); },
	1000/60);

	canvas_element.addEventListener('click',
		function (event) { canvas_manager.canvas_on_click(event.pageX, event.pageY, images) }, false);
}

window.onload = main;
