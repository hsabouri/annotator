// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   cross.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: etrobert <etrobert@student.42.fr>          +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2017/06/28 00:16:09 by etrobert          #+#    #+#             //
//   Updated: 2017/06/28 03:22:47 by etrobert         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function	print_line(context, x1, y1, x2, y2)
{
	context.moveTo(x1 + 0.5, y1 + 0.5);
	context.lineTo(x2 + 0.5, y2 + 0.5);
}

function	print_cross(context, x, y, w)
{
	print_line(context, x - w, y, x + w, y);
	print_line(context, x, y - w, x, y + w);
	context.stroke();
}

function	print_fancy_cross(context, coord)
{
	var cross_size = 10;
	var color = "black";
	var border = "white";
	var border_width = "3";
	var cross_width = "1";
	
	context.lineWidth = border_width;
	context.strokeStyle = border;
	print_cross(context, coord.x, coord.y, cross_size);
	context.lineWidth = cross_width;
	context.strokeStyle = color;
	print_cross(context, coord.x, coord.y, cross_size);
}
