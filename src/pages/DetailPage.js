import React from 'react';
import { useParams } from 'react-router-dom';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data';
import { showFormattedDate } from '../utils';
import ArchiveNoteButton from '../components/buttons/ArchiveNoteButton';
import DeleteNoteButton from '../components/buttons/DeleteNoteButton';
import NotFoundPage from './NotFoundPage';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    const { id } = this.props;

    this.state = {
      note: getNote(id),
    };

    autoBind(this);
  }

  onArchiveHandler() {
    const { note } = this.state;
    const { id, archived } = note;
    if (archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
  }

  onDeleteHandler() {
    const { note } = this.state;
    const { id } = note;
    deleteNote(id);
  }

  render() {
    const { note } = this.state;

    if (!note) {
      return <NotFoundPage />;
    }

    const { title, body, createdAt } = note;

    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{body}</div>
        <div className="detail-page__action">
          <ArchiveNoteButton onArchive={this.onArchiveHandler} />
          <DeleteNoteButton onDelete={this.onDeleteHandler} />
        </div>
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
