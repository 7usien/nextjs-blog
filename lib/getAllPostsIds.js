import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postsDirectory } from './posts';

export default function getAllPostsIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}
