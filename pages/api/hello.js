import React from 'react';

export default function handler(req, res) {
	res.setPreviewData({});
	res.end('Preview mode enabled');

	res.status(200).json({
		posts: [
			{
				id: 1,
				title: 'hello world',
				img: 'https://images.pexels.com/photos/2888679/pexels-photo-2888679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			},
			{
				id: 2,
				title: 'hello fish',
				img: 'https://images.pexels.com/photos/3038786/pexels-photo-3038786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			},
			{
				id: 3,
				title: 'hello people',
				img: 'https://images.pexels.com/photos/10276620/pexels-photo-10276620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			},
		],
	});
}
