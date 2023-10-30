const { response } = require("express");
const Thought = require("../model/Thought");

module.exports = {
    async dashboard(req, res) {
        const thoughts = await Thought.findAll({ raw: true });
        return res.render("thoughts/dashboard", { thoughts });
    },
    
    async registerThought(req, res) {
        return res.render("thoughts/register");
    },

    async createThought(req, res)
    {
        const { title, description } = req.body;
        const thought = await Thought.create({title, description});

        try{
            if(thought) {
                return res.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error);
        }
    },

    async showPageEditThought(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where: {id: id}, raw: true });

        return response.render("thoughts/edit", { thought });
    },

    async updateThought(req, res){
        const { id } = req.params;
        const { title, description } = req.body;
        const thought = await Thought.update(
        {
            title,
            description
        },
        {
            where: { id: id }
        }
        );

        try{
            if(thought){
                return res.redirect("/thoughts/dashboard");
            }
        } catch(error){
            console.error(error);
        }
    },

    async deleteThought(req,res) {
        const {id} = req.params;
        const thought = await Thought.destroy({ where:  {id} });

        try{
            if(thought){
                return response.redirect("/thoughts/dashboard");
            }
        } catch(error){
            console.error(error);
        }
    }
};