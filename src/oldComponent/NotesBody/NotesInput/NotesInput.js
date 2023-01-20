import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    const { addNote } = this.props;
    this.addNote = addNote;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length > 50) {
      return;
    }

    this.setState({
      title: event.target.value,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.addNote(this.state);
  }

  render() {
    const { title, body } = this.state;

    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Sisa Karaker:
            {50 - title.length}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required="required"
            value={title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu disini ..."
            required="required"
            value={body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
