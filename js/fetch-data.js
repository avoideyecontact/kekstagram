const createFetch = (onSuccess, onError) => () => {
  return fetch(
    'https://22.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

export { createFetch }

// От Юрий Белобородов всем:  06:16 PM
//   fetch(
//     'https://22.javascript.pages.academy/kekstagram',
//     {
//       method: 'POST',
//       body,
//     },
//   ).then((response) => {
//    if (response.ok) {
//        onSuccess()
//    } else {
//        onError()
//    }
// })
