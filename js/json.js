function saveAsJson(obj, filename)
{
	var blob = new Blob([JSON.stringify(obj, null, 4)],
		{type: "text/plain;charset=utf-8"});
	saveAs(blob, filename);
}

function	parse_images(images)
{
	var	tab = [];
	var images_tab = images.get_images();

	for (var i = 0; i < images_tab.length; ++i)
	{
		var des = images_tab[i];
		tab.push({file_name: des.file_name, regions: des.points });
	}
	return (tab);
}

function	save_images(images, filename)
{
	saveAsJson(parse_images(images), filename);
}
