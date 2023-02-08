import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import AddNoteButton from '../components/buttons/AddNoteButton';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => searchParams.get('keyword') || '');
  const [loading, setLoading] = React.useState(true);

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getArchivedNotes();
      if (data !== null) {
        setNotes(data);
      }
      setLoading(false);
    };

    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams(keyword);
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(
    keyword.toLowerCase(),
  ));

  return (
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} loading={loading} />
      <div className="homepage__action">
        <AddNoteButton />
      </div>
    </section>
  );
}

export default HomePage;
