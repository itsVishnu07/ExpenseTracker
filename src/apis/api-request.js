import api from './api';

const apiRequest = async (options) => {

  try {
    const response = await api(options);
    return response;
  } catch (exception) {
    return exception;
  }
};

export default apiRequest;
