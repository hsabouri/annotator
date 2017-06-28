/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   canvas.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hsabouri <hsabouri@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/28 00:19:23 by hsabouri          #+#    #+#             */
/*   Updated: 2017/06/28 03:10:59 by hsabouri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var Canvas_manager = function(element) {
	var _canvas_element = element;
	var _ctx = _canvas_element.getContext("2d");

	this.set_canvas_properties = function(properties) {
		if (properties.width) {
			_canvas_element.width = properties.width;
		}
		if (properties.height) {
			_canvas_element.height = properties.height;
		}
	};
	var _set_canvas_properties = this.set_canvas_properties;

	this.display_image = function(image) {
		_ctx.drawImage(image.element, 0, 0,
			Math.round(image.width * image.scale),
			Math.round(image.height * image.scale));
	}
	var _display_image = this.display_image;

	this.get_ctx = function() {
		return (_ctx);
	}

	this.update_canvas = function(images)
	{
		if (images.get_loaded_status()) {
			_set_canvas_properties({
				width: images.get_current_image_des().width *
					images.get_current_image_des().scale,
				height: images.get_current_image_des().height *
					images.get_current_image_des().scale
			});
			_display_image(images.get_current_image_des());
			points = images.get_current_image_des().points;
			_ctx.beginPath();
			for (var i = 0; i < points.length; ++i)
				print_fancy_cross(_ctx, image_to_canvas(points[i],
				images.get_current_image_des()));
			_ctx.closePath();
		}
	}
	var _update_canvas = this.update_canvas;

	var	_delete_point = function(coord, des)
	{
		for (var i = 0; i < des.points.length; ++i)
		{
			if (coord_close(coord, image_to_canvas(des.points[i], des)))
			{
				des.points.splice(i, 1);
				return (true);
			}
		}
		return (false);
	}

	var _canvas_on_click = function(coord, images) {
		if (!_delete_point(coord, images.get_current_image_des()))
			images.get_current_image_des().points.push(canvas_to_image(coord,
				images.get_current_image_des()));
	}
	this.canvas_on_click = _canvas_on_click;
}
