/** @format */

export const service = {};

service.getConf = () => {
  return fetch('http://localhost:4000/example').then((response) => {
    return response.json();
  });
};

// export default service;
