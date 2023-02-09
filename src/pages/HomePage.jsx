import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import AddNoteButton from '../components/buttons/AddNoteButton';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');
  const [loading, setLoading] = useState(true);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
      setLoading(false);
    };

    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(
    keyword.toLowerCase(),
  ));

  return (
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} loading={loading} />
      <div className="homepage__action">
        <AddNoteButton />
      </div>
    </section>
  );
}

export default HomePage;
