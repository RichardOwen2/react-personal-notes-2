import React from 'react';

import NotesHeader from './NotesHeader/NotesHeader';
import NotesBody from './NotesBody/NotesBody';
import { getAllNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveButton = this.onArchiveButton.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    const { notes } = this.state;
    const data = notes.filter((note) => note.id !== id);
    this.setState({ notes: data });
  }

  onArchiveButton(id) {
    const { notes } = this.state;
    const note = notes.filter((note) => note.id === id)[0];
    note.archived = !note.archived;

    this.setState((prevState) => ({
      notes: [
        note,
        ...prevState.notes.filter((note) => note.id !== id),
      ],
    }));
  }

  onAddNoteHandler({ title, body }) {
    const createdAt = new Date();
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: createdAt.toISOString(),
        },
      ],
    }));
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    // this.props.keywordChange(keyword);
  }

  render() {
    const { notes, keyword } = this.state;
    return (
      <>
        <NotesHeader
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesBody
          notes={notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveButton}
          dateFormat={showFormattedDate}
        />
      </>
    );
  }
}

export default NotesApp;
