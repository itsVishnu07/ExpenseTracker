export const onRequest = async (config) => {

    //const token = await getToken();
    const controller = new AbortController();
    if (config.url && config.url.indexOf("login") < 0) {
      // if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    }
  
    return {
      ...config,
      signal: controller.abort(),
    };
  };
  export const onRequestError = (error) => {
    if (error.response === undefined) {
      // // notification.error({ message: 'Request error' });
    }
    return error;
  };

  export const onResponse = (response) => {
    if (response) {
      if (response.data) {
        return response.data;
      } else return response;
    }
    // return response.status === 200 ? response.data?.data : response.data;
  };
  export const onResponseError = (error) => {

    if(error.response === undefined) {
      // notification.error({ message: error.message });
      return;
    } else if (error.response.status === 401) {
      console.log("error.request", error.request);
      console.log("error.response", error.response);
  
      if (
        error?.response?.config?.url &&
        error?.response?.config?.url?.indexOf("login") < 0
      ) {
      } else {
        return;
      }
  
      return;
    } else if (error.response.status === 400) {
     if (error.response.data.statusCode === "401") {
        if (
          error?.response?.config?.url &&
          error?.response?.config?.url?.indexOf("login") < 0
        ) {
        } else {
          return;
        }
      }
    } else if (error.response.status === 403) {
    } else if (error.response.status === 500) {
      return error.response.data

      // notification.error({ message: error.message });
      return;
    }else if(error.response.status === 422){
      return error.response.data
    }else if(error.response.status === 404){
      return error.response.data
    }
     else {
      // notification.error({ message: errorMessage });
      return;
    }
    return error;
  };