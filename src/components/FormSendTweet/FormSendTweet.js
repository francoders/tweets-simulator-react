import React from 'react'
import { FormControl, FormGroup, TextField, Button } from '@mui/material'
import './FormSendTweet.scss'

export default function FormSendTweet(props) {
    const { } = props;

    return (
        <div className='form-send-tweet'>
            <h2 className='form-send-tweet__title'>Enviar Tweet</h2>
            <form className='form-send-tweet__form'>
                <FormControl>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-name'
                            type='text'
                            name='name'
                            label="Usuario"
                            placeholder='Ingrese su nombre de usuario'
                            variant="standard"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-textarea'
                            name='tweet'
                            multiline
                            label="Tweet"
                            placeholder='Escribe un tweet...'
                            variant="standard"
                            rows={6}
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit'> Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}
