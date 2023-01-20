import React from 'react';

function NotesSearchBar({ keyword, keywordChange }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari Catatan..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

// class NotesSearchBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       keyword: '',
//     };

//     const { onSearch } = this.props;

//     this.onSearch = onSearch;
//     this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
//   }

//   onSearchChangeEventHandler(event) {
//     this.setState({ keyword: event.target.value });
//     this.onSearch(event.target.value);
//   }

//   render() {
//     const { keyword } = this.state;

//     return (
//       <div className="note-search">
//         <input
//           type="text"
//           placeholder="Cari Catatan..."
//           value={keyword}
//           onChange={this.onSearchChangeEventHandler}
//         />
//       </div>
//     );
//   }
// }

export default NotesSearchBar;
