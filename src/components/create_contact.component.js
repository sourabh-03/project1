import React, { Component } from 'react';
import axios from 'axios';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import {  IoIosCall} from 'react-icons/io';
import {  IoMdBriefcase} from 'react-icons/io';

export default class CreateExercise extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          contact: '',
          message: ''
        }
    }
    onEmailChange(event) {
        console.log(event.target.value);
        this.setState({email: event.target.value})
    }
    
    onContactChange(event) {
        console.log(event.target.value)
        this.setState({contact: event.target.value})
      }
    
    onMessageChange(event) {
        console.log(event.target.value)
        this.setState({message: event.target.value})
    }
    onsubmitform(event){
        event.preventDefault();
        console.log(this.states);
        axios({
            method: "POST", 
            url:"http://localhost:5000/send", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            }
          })
    }
    resetForm(){
    
        this.setState(
            {
            email:'',
            contact:'',
            message:''
        }
        );
     }
     

    render(){
        return(
            <div>
    <form id="contact-form" onSubmit={this.onsubmitform.bind(this)} method="POST">
    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="email"  placeholder="Enter email"  value={this.state.name} onChange={this.onEmailChange.bind(this)} required/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div className="form-group">
        <label >Contact:</label>
        <input type="tel" className="form-control" id="contact" placeholder="Enter contact" pattern="[0-9]{10}" value={this.state.contact} onChange={this.onContactChange.bind(this)} required/>
   </div>
   <div className="form-group">
        <label >Message :</label>
        <input type="textbox" className="form-control" id="Message" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
   </div>
   <div className="form-check">
       <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
       <label className="form-check-label">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div className="col-md-12 text-center">
    <p>CONTACT US:</p>
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p> <IoMdBriefcase/><br></br> Varanasi,Uttar Pradesh, India
                    
                    </p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p><IoIosCall/><br></br>
                    9532471137</p>
                    
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p><BsFillEnvelopeFill/><br></br>ricardosmith0398@gmail.com</p>
        
                </li>
            </ul>
        </div>
    </div>
        )
    }
}