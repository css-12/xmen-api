import axios from 'axios';

export default axios.create({
  baseURL: 'https://xmenapiheroku.herokuapp.com/api',
});
