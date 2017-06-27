/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   canvas.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hsabouri <hsabouri@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/06/28 00:19:23 by hsabouri          #+#    #+#             */
/*   Updated: 2017/06/28 01:10:53 by hsabouri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var Renderer = function(element) {
	var _canvas_element = element;
	var _ctx = _canvas_element.getContext("2d");

	this.set_canvas_properties = function(properties) {
		if (properties.width) {
			_canvas_element.width = properties.width;
		}
		if (properties.height) {
			_canvas_element.height = properties.height;
		}
	}

	this.display_image = function(image) {
		_ctx.drawImage(image.element, 0, 0, Math.round(image.width * image.scale), Math.round(image.height * image.scale));
	}

	this.get_ctx = function() {
		return (_ctx);
	}
}