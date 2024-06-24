// @ts-nocheck
const paramsKeyConvert = (str = '') => str.replace(/[A-Z]/g, ([s]) => `_${s.toLowerCase()}`);

export const fetchAPI = async (path, params = {}, options?): Promise<{ data?: any; error?: any }> => {
  const endpoint = `${process.env.NEXT_PUBLIC_API_END_POINT}`;

  const url = new URL(path, endpoint);
  for (const key of Object.keys(params)) {
    url.searchParams.set(paramsKeyConvert(key), params[key]);
  }

  return new Promise((resolve) =>
    fetch(url, options)
      .then((resp) =>
        resp.status !== 200
          ? resp.json().then((data) =>
              resolve({
                  data
              }),
            )
          : resp.json().then((data) => resolve({ data })),
      )
      .catch((e) =>
        resolve({
          error: {
            status: 500,
            message: e.message,
          },
        }),
      ),
  );
};



export const fetchGET = async (path, param = {},  token=null ) => {

  return await fetchAPI(path, param, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token ? token :localStorage.getItem('token')}`,
    },
  });
};

export const fetchPOST = async (path, body = null, token=null ) => {
  return await fetchAPI(
    path,
    {},
    {
      method: 'POST',
      // credentials: "same-origin",
      body: body ? JSON.stringify(body) : null,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const fetchPUT = async (path, body, token=null ) => {
  if (body.image) {
    // If there is an image, construct FormData for multipart form data
    const formData = new FormData();
    formData.append('image', body.image);

    return await fetchAPI(
      path,
      {},
      {
        method: 'PUT',
        body: formData,
        headers: {
          Authorization:  `Bearer ${token ? token :localStorage.getItem('token')}`,
        },
      },
    );
  } else {
    // If there is no image, send JSON data
    return await fetchAPI(
      path,
      {},
      {
        method: 'PUT',
        body: body ? JSON.stringify(body) : null,
        headers: {
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${token ? token :localStorage.getItem('token')}`,
        },
      },
    );
  }
};


