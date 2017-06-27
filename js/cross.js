function print_line(context, x1, y1, x2, y2)
{
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
}

function	print_cross(context, x, y, w)
{
	print_line(context, x - w, y, x + w, y);
	print_line(context, x, y - w, x, y + w);
	context.stroke();
}

function print_fancy_cross(context, x, y)
{
	var w = 10;
	
	context.lineWidth = "4";
	context.strokeStyle = "gold";
	print_cross(context, x, y, w);
	context.lineWidth = "1";
	context.strokeStyle = "black";
	print_cross(context, x, y, w);
}
