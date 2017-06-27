// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   json.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: etrobert <etrobert@student.42.fr>          +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2017/06/28 00:16:34 by etrobert          #+#    #+#             //
//   Updated: 2017/06/28 00:16:37 by etrobert         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function saveAsJson(obj, filename)
{
	var blob = new Blob([JSON.stringify(obj)],
		{type: "text/plain;charset=utf-8"});
	saveAs(blob, filename);
}
