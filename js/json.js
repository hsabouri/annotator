function saveAsJson(obj, filename)
{
	var blob = new Blob([JSON.stringify(obj)],
		{type: "text/plain;charset=utf-8"});
	saveAs(blob, filename);
}
