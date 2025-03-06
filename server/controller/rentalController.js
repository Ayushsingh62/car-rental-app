const getAllrentals = async(req , res )=>{

res.send("All rentals")

};
const getAllrental = async(req , res )=>{

    res.send(" Single rental")
    
    };
    const addrentals = async(req , res )=>{

        res.send(" Rentals added")
        
        }
        const updaterentals = async(req , res )=>{

            res.send(" Rentals updated")
            
            }

        module.exports={getAllrentals, getAllrental, addrentals ,updaterentals}