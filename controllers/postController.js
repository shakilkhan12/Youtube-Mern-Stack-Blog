const formidable = require('formidable');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
module.exports.createPost = (req, res) => {
	const form = formidable({ multiples: true });
	form.parse(req, (error, fields, files) => {
		const { title, body, description, slug, id, user } = fields;
		const errors = [];
		if (title === '') {
			errors.push({ msg: 'Title is required' });
		}
		if (body === '') {
			errors.push({ msg: 'Body is required' });
		}
		if (description === '') {
			errors.push({ msg: 'Description is required' });
		}
		if (slug === '') {
			errors.push({ msg: 'Slug is required' });
		}
		if (Object.keys(files).length === 0) {
			errors.push({ msg: 'Image is required' });
		} else {
			const { type } = files.image;
			const split = type.split('/');
			const extension = split[1].toLowerCase();
			if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
				errors.push({ msg: `${extension} is not a valid extension` });
			} else {
				files.image.name = uuidv4() + '.' + extension;
				const newPath =
					__dirname + `/../client/public/images/${files.image.name}`;
				fs.copyFile(files.image.path, newPath, (error) => {
					if (!error) {
						console.log('image uploaded');
					}
				});
			}
		}
		if (errors.length !== 0) {
			return res.status(400).json({ errors, files });
		}
	});
};
