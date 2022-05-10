import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@mui/material';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';

import { TWEETS_STORAGE } from './utils/Contants';

function App() {
  const [toasProps, setToasProps] = useState({
    open: false,
    text: null
  })

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false)

  useEffect(() => {
    const AllTweetStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetArray = JSON.parse(AllTweetStorage);
    setReloadTweets(false)
  }, [reloadTweets])

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true)
  }

  return (
    <Container className='tweets-simulator' maxWidth={false}>
      <Header />
      <SendTweet setToasProps={setToasProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={toasProps.open}
        autoHideDuration={1000}
        message={<span id='message-id'> {toasProps.text} </span>}
      />
    </Container>
  );
}

export default App;
