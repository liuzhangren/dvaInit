
import {
  testRequest
} from '../../services/test'

export default {
  namespace: 'test',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchTest ({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(testRequest)
      debugger
      if(true) {
        yield put({
          type: 'save',
          payload: {
            list: res.data.data
          }
        })
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
