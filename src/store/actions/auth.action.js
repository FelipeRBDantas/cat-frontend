import { Http } from '../../config/Http';
import { changeLoading } from './loading.action';
import { changeNotify } from './notify.action';

export const actionTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS',
}

export const change = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);

    dispatch(change({
        email: '',
        password: '',
    }));

    dispatch(success(true));
}

export const login = credentials => dispatch => {
    dispatch(changeLoading({
        open: true,
        msg: 'Autenticando usuário...'
    }));

    return Http.post('auth', {
        email: credentials.email,
        password: credentials.password,
        device_name: credentials.email
    }).then(res => {
        dispatch(changeLoading({ open: false }));

        if (typeof res !== 'undefined') {
            if (res.data.token) {
                dispatch(setUserToken(res.data.token));
            }
        }

        dispatch(changeNotify({
            open: true,
            class: 'success',
            msg: 'Login efetuado com sucesso! TOKEN: ' + res.data.token +
                ' NOME: ' + res.data.data.name + ' IDENTIFY: ' + res.data.data.identify +
                ' EMAIL: ' + res.data.data.email
        }));
    }).catch(error => {
        dispatch(changeLoading({ open: false }));

        if (typeof error.response !== 'undefined') {
            if (error.response.status === 401 || error.response.status === 400 ||
                error.response.status === 422 || error.response.status === 404) {
                dispatch(changeNotify({
                    open: true,
                    class: 'error',
                    msg: 'E-mail e/ou Senha inválidos'
                }));
            }
        } else {
            dispatch(changeNotify({
                open: true,
                class: 'error',
                msg: 'Erro ao se conectar com o servidor'
            }));
        }
    });
}
