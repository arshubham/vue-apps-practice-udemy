import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur-token'),
};

const getters = {
    isLoggedIn: state => !!state.token
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur-token')
    },
    login: () => {
        api.login();
    },
    finalizeLogin: ({commit}, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur-token',query.access_token );
        router.push('/')
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

// http://localhost:8080/oauth2/callback#access_token=8529e8ab75086c4ab0177f4924785bec2f208947&expires_in=315360000&token_type=bearer&refresh_token=0cf02b56d46d09fc75582d042743741af479f2dc&account_username=ars1&account_id=42886273