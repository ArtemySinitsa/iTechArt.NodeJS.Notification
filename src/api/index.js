export default request => request.then(res => ({
  ...res.data,
})).catch(err => (
  err.response ?
    { ...err.response.data } :
    { success: false, message: 'Server unavailable...' }
));
