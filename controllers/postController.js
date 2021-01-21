const formidable = require('formidable');
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
		if (errors.length !== 0) {
			return res.status(400).json({ errors });
		}
	});
};
