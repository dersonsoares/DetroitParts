const mongoose = require('mongoose');
const User =  mongoose.model('User');

module.exports = {
    async insert (req, res){
        const users = await User.create(req.body);
        return res.json(users);
    },
    async userIndex (req, res){
        const { page } = req.query;
        const users = await User.paginate({},{page, limit: 5});
        return res.json(users);
    },
    async userDetails(req, res){
        const users = await User.findById(req.params.id);
        return res.json(users);
    },
    async userUpdate(req, res){
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(users); 
   },
   async userDelete(req, res){
       const users = await User.findByIdAndDelete(req.params.id);
       return res.send();
   }

}