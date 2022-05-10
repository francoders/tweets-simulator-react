import React, { useState } from 'react'
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import moment from 'moment'
import "./SendTweet.scss"
import ModalContainer from '../ModalContainer'
import FormSendTweet from '../FormSendTweet'
import twitterIcon from '../../assets/img/twitter-logo.png';
import { TWEETS_STORAGE } from '../../utils/Contants'

export default function SendTweet(props) {
    const { setToasProps, allTweets } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };


    const sendTweet = (event, formValue) => {
        event.preventDefault();
        const { name, tweet } = formValue;
        let allTweetArray = [];

        if (allTweets) {
            allTweetArray = allTweets;
        }

        if (!name || !tweet) {
            setToasProps({
                open: true,
                text: 'WARNING: Todos los campos son obligatorios'
            })
        } else {
            formValue.time = moment();
            allTweetArray.push(formValue)
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
            setToasProps({
                open: true,
                text: 'Tween enviado correctamente'
            })
            closeModal()
        }
        allTweetArray = [];
    }

    return (
        <div className="send-tweet">
            <Fab
                className='send-tweet__open-modal'
                color='primary'
                aria-label='add'
                onClick={openModal}
            >
                <AddIcon />
            </Fab>

            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet} />
            </ModalContainer>
        </div>
    )
}

