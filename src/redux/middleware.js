// import { initUser } from './session/operations';
// import api from '../utils/api';
// import { setToken, getToken } from '../utils/storage';
// const logger = store => next => action => {
//   console.log('dispatching', action);
//   const result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };
const initApp = () => next => action => {
  // if (action.type === initUser().type) {
  //   if (getToken()) {
  //     api
  //       .fetchUser(getToken())
  //       .then(res => {
  //         if (res.status === 401) {
  //           next(action);
  //         }
  //         const token = JSON.stringify(res.data.token);
  //         setToken(token);
  //         // console.group('middlware fetch data');
  //         // console.log('token', token);
  //         // console.log('res.status', res.status);
  //         // console.log('res.data', res.data);
  //         // console.groupEnd('=================');

  //         action.payload = { ...res.data };
  //         // console.log('action.payload', action.payload);
  //         console.log('action', action);
  //         next(action({ fsa: 'gds' }));
  //       })
  //       .catch(err => console.log('err', err));
  //   }

  //   next(action);
  // }
  next(action);
};

export default [initApp];
