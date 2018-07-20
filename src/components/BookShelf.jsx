import React from 'react';
import Footer from './Footer';
import ReadingNowPreview from './ReadingNowPreview';
import headerMain from '././../assets/images/headerMain.png';
import { connect } from 'react-redux';
import BookShelfItem from './BookShelfItem';
import PropTypes from 'prop-types';

function BookShelf(props) {
  return (
    <div className='container'>
      <div>
        <div className='header'>
          <h1>Book Shelf</h1>
        </div>
        <div className='reading-now-preview'>
          <ReadingNowPreview />
        </div>
        <div className='book-list'>
          <h3>Your Completed Shelf</h3>
          <div className='bookshelf-grid'>
            {Object.keys(props.selectedBook.bookList).map(function(bookId){
              let book = props.selectedBook.bookList[bookId];
              console.log(book.read);
              if (book.read){
                return <BookShelfItem
                  title={book.title}
                  image={book.image}
                  author={book.author}
                  key={bookId}
                  id={bookId}
                  />;
              }
            })}
          </div>
    </div>
        <Footer />
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .container{
          max-width: 600px;
          margin: auto;
        }
        .header{
          background-image: url(${headerMain});
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
          height: 100%;
          width: 100%;
          min-height: 300px;
          max-width: 600px;
        }
        h1{
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 2.6rem;
          text-align: center;
          padding-top: 40px;
          margin-top: 0;
        }
        .book-list{
          font-family: 'Montserrat', sans-serif;
          margin: 20px 0 0 20px;
        }
        .bookshelf-grid{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          grid-gap: 10px;
          grid-auto-flow: dense;
        }
      `}</style>
    </div>
  );
}

BookShelf.propTypes = {
  selectedBook: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps)(BookShelf);
