const path = require('node:path');

const studioService = require(path.join(__dirname, '../services/studioService.js'));


class studiosController {
    render(data) {
        const pageName = req.path.substring(1);
        res.render(pageName, { data });
    }

    async studios(req, res) {
        const sessionId = req.session.userKey;

        try {
            const contentPage = 'studios.ejs';
            const apiKey = process.env.GOOGLE_API_KEY
            const studios = await studioService.getStudios()
            res.render('layout', {studios: studios, apiKey: apiKey ,content: contentPage });
        } catch (e) {
            res.redirect('/register?error=1');
        }
    }
}
module.exports = new studiosController();
