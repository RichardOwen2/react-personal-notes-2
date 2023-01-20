import React from 'react';
import { addNote } from '../utils/local-data';
import AddNoteInput from '../components/AddNoteInput';
import SubmitNoteButton from '../components/buttons/SubmitNoteButton';

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  onBodyChange(event) {
    this.setState({body: event.target.value});
  }

  onSubmitHandler() {
    addNote(this.state);
  }

  render() {
    const { title, body } = this.state

    return (
      <div className="add-new-page">
        <AddNoteInput
          title={title}
          body={body}
          onTitleChange={this.onTitleChange} 
          onBodyChange={this.onBodyChange} 
        />
        <div className="add-new-page__action">
          <SubmitNoteButton onSubmit={this.onSubmitHandler} />
        </div>
      </div>
    );
  }
}

export default AddNote;