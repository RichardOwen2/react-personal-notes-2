import React from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import LoadingMessage from '../components/LoadingMessage';
import ArchiveNoteButton from '../components/buttons/ArchiveNoteButton';
import DeleteNoteButton from '../components/buttons/DeleteNoteButton';

import { getNote } from '../utils/network-data';
import { showFormattedDate } from '../utils';

function DetailPage() {
  const [note, setNote] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };

    fetchNote();
  }, []);

  if (loading) {
    return <LoadingMessage />;
  }

  if (!note) {
    return <NotFoundPage />;
  }

  const {
    archived, title, body, createdAt,
  } = note;

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <ArchiveNoteButton archive={archived} id={id} />
        <DeleteNoteButton id={id} />
      </div>
    </section>
  );
}

export default DetailPage;
