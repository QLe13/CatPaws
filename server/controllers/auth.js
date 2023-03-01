const login = (req,res) =>{
    try {
        update = {data:req.body, stats:"Success connection"}
        res.status(200).json(update)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}

module.exports = {login}