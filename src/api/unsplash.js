import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c64866610be2c1f74c8142c7b51ee2aa598c34b911289ed73f65002caf882624'
  }
});
