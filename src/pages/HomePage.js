import React from 'react';
import autoBind from 'react-autobind';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import AddNoteButton from '../components/buttons/AddNoteButton';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };

    autoBind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => ({
      keyword,
    }));

    const { keywordChange } = this.props;
    keywordChange(keyword);
  }

  render() {
    const { notes: stateNotes, keyword } = this.state;

    const notes = stateNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={keyword} keywordChange={this.onKeywordChangeHandler} />
        <NotesList notes={notes} />
        <div className="homepage__action">
          <AddNoteButton />
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
