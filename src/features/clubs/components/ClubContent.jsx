import React from 'react'
import SearchBar from '@/components/ui/SearchBar'
import PostCardMasonry from './PostCardMasonry'

const ClubContent = ({ data }) => {
    
  return (
    <div className=''>
        <div className='mb-4'>ClubContent</div>
        <SearchBar />
        <PostCardMasonry data={data} />
    </div>
  );
};

export default ClubContent;