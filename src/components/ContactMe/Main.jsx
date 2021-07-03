import React from 'react'
import "./Main.css"
import Button from 'react-bootstrap/Button'
function main() {
    return (
        <div className="main-div">
           <div className="form-div">
               <form action="mailto:nandakumarpr046@gmail.com" >
                   <label for="name" >Name: </label>
                   <input type="text" placeholder="Your name" id="name" />
                   <label for="contact">Contact no.: </label>
                   <input type="number" placeholder="Your Contact Number" id="contact" />
                   <label for="e-mail">E-mail: </label>
                   <input type="email" placeholder="Your email" id="e-mail" />
                   <label for="message" >Your Messages:</label>
                   <textarea type="textarea" id="message" rows="4" cols="50"></textarea>
                   <Button>Submit</Button>
               </form>
           </div> 
        </div>
    )
}

export default main
