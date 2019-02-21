import React, { Component } from 'react'
import './updateNote.scss'



class UpdateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      id: ''
    }
  }
  componentDidMount() {
    const { notes, match } = this.props
    const note = notes.find(note => note.id === Number(match.params.id))
    console.log(note, "note")
    console.log(match.params.id, "params")
    console.log(notes, "notes")
    this.setState({
      title: note.title,
      text: note.details,
      id: note.id
    })
  }

  inputHandle = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const note = { title: this.state.title, details: this.state.text, id: this.state.id }
    this.props.updateNote(note.id, note)
    this.props.history.push('/')

  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="update">
        <h1>Update Note</h1>
        <form className="form">
         <input name="title" onChange={this.changeHandler} value={this.state.title}></input>
          <textarea name="text" onChange={this.changeHandler} value={this.state.text} className="textArea"></textarea>
          <button onClick={this.submitHandler} type="submit" color="info">Submit</button>
        </form>
      </div>

    )
  }
}



export default UpdateNote
