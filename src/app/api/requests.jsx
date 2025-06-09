export const getContentFul = () => {
  return fetch(
    `https://cdn.contentful.com/spaces/vavj1tdsc9on/entries?access_token=QYR-e3Yb0BkchJGsBm25R-QHGW_9AY2cfYKST2LYfHw`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}