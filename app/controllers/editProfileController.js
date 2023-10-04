const path = require('node:path');
const profileService = require(path.join(__dirname, '../services/profileService.js'));

class editProfileController {
    render(data) {
        const pageName = req.path.substring(1);
        res.render(pageName, { data });
    }

    async userInfo(req, res) {
        const sessionId = req.session.userKey;

        try {
            const userInfo = await profileService.getUser(sessionId);
            const { email, fullName } = userInfo;
            const contentPage = 'editProfile.ejs';
            res.render('layout', { username: email, content: contentPage });
        } catch (e) {
            res.redirect('/register?error=1');
        }
    }

    //  Still has to be modified to update optional fields
    async updateUserInfo(req, res) {
        const  sessionId = req.session.userKey;

        // TO DO - check what happens if the field is empty - if it fields is getting crossed
        const fields = {city: req.body.city, address: req.body.address, country: req.body.country, dancingStyles: req.body.dancingStyles };

        try {
            const updateUserInfo = await profileService.updateUserInfo(sessionId, fields)
            const contentPage = 'profile.ejs';
            res.render('layout', { fields, content: contentPage});

        } catch (e) {
            res.redirect('/register?error=1');
        }
    }
}

module.exports = new editProfileController();