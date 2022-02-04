import React from 'react';
import PaperCard from '../components/PaperCard/PaperCard';
import Search from '../components/Search/Search';

function SearchPage() {
  return (
    <div className='mt-5 pt-3'>
      <Search type="big" />
      <hr className='mx-5'/>
      <h6 className='text-center text-muted'>Search Results</h6>
      <div className='row mx-5 mb-5 row-cols-1 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3'>
        <PaperCard title="Hello" issn="123456789" />
        {/* <PaperCard title="Hello" issn="123456789" />
        <PaperCard title="Hello" issn="123456789" />
        <PaperCard title="Hello" issn="123456789" />
        <PaperCard title="Hello" issn="123456789" />
        <PaperCard title="Hello" issn="123456789" /> */}
      </div>
    </div>
  );
}

export default SearchPage;
