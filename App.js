import React from 'react';
require("./form.scss")


const reactFormContainer = document.querySelector('.react-form-container');

class ReactFormLabel extends React.Component {
 constructor(props) {
  super(props);
 }
 
 render() {
  return(
   <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
  )
 }
}
class ReactForm extends React.Component {
 constructor(props) {
  super(props);

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

  this.state = {
   name: '',
   email: '',
   subject: '',
   message: ''
  }
 }
 
 handleChange(e) {
  let newState = {}

  newState[e.target.name] = e.target.value

  this.setState(newState)
 }

 
 handleSubmit(e, message) {
  e.preventDefault();

  let formData = {
   formSender: this.state.name,
   formEmail: this.state.email,
   formSubject: this.state.subject,
   formMessage: this.state.message
  }
 
  if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
   return false;
  }
 
  this.setState({
   firstName: '',
   lastName: '',
   email: '',
   subject: '',
   message: ''
  });
 };

 render() {
  return(
   <form className='react-form' onSubmit={this.handleSubmit}>
    <h1>你 好 !</h1>

    <fieldset className='form-group'>
     <ReactFormLabel htmlFor='formName' title='昵称:' />

     <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
    </fieldset>
 
    <fieldset className='form-group'>
     <ReactFormLabel htmlFor='formEmail' title='邮箱:' />

     <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
    </fieldset>
 
    <fieldset className='form-group'>
     <ReactFormLabel htmlFor='formSubject' title='密码:'/>

     <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
    </fieldset>
 
    <fieldset className='form-group'>
     <ReactFormLabel htmlFor='formMessage' title='自我介绍:' />

     <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
    </fieldset>
 
    <div className='form-group'>
     <input id='formButton' className='btn' type='submit' placeholder='Send message' />
    </div>
   </form>
  )
 }
};

// ReactDOM.render(<ReactForm />, reactFormContainer);

export default ReactForm;