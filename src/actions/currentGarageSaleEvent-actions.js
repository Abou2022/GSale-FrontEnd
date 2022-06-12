import superagent from 'superagent';

export const currentGarageSaleEventFetch = garageSaleEvent => ({
  type: 'CURRENT_GARAGE_SALE_EVENT_FETCH',
  payload: garageSaleEvent,
});

export const currentGarageSaleEventCreate = garageSaleEvent => ({
  type: 'CURRENT_GARAGE_SALE_EVENT_CREATE',
  payload: garageSaleEvent,
});

export const currentGarageSaleEventUpdate = garageSaleEvent => ({
  type: 'CURRENT_GARAGE_SALE_EVENT_UPDATE',
  payload: garageSaleEvent,
});

export const currentGarageSaleEventDelete = garageSaleEvent => ({
  type: 'CURRENT_GARAGE_SALE_EVENT_DELETE',
  payload: garageSaleEvent,
});

export const currentGarageSaleEventFetchRequest =
  garageSaleEventID => dispatch => {
    return superagent
      .get(
        `https://gsale-backend.herokuapp.com/api/garageSaleEvents/${garageSaleEventID}`
      )
      .then(res => {
        dispatch(currentGarageSaleEventFetch(res.body.garageSaleEvent));
        return res.body.garageSaleEvent;
      })
      .catch(err => {
        console.log('currentGarageSaleEventFetch Error: ', err);
        return err;
      });
  };

export const currentGarageSaleEventCreateRequest =
  garageSaleEvent => dispatch => {
    const token = JSON.parse(localStorage.getItem('gSaleToken'));
    return superagent
      .post(`https://gsale-backend.herokuapp.com/api/garageSaleEvents`)
      .set('Authorization', `Bearer ${token}`)
      .send(garageSaleEvent)
      .then(res => {
        dispatch(currentGarageSaleEventCreate(res.body));
        return res.body;
      })
      .catch(err => {
        console.log('garageSaleEventCreateRequest Error: ', err);
        return err;
      });
  };

export const currentGarageSaleEventUpdateRequest =
  garageSaleEvent => dispatch => {
    const token = JSON.parse(localStorage.getItem('gSaleToken'));
    return superagent
      .put(
        `https://gsale-backend.herokuapp.com/api/garageSaleEvents/${garageSaleEvent.id}`
      )
      .set('Authorization', `Bearer ${token}`)
      .send(garageSaleEvent)
      .then(res => {
        dispatch(currentGarageSaleEventUpdate(res.body));
        return res.body;
      })
      .catch(err => {
        console.log('garageSaleEventUpdateRequest Error: ', err);
        return err;
      });
  };

export const currentGarageSaleEventDeleteRequest =
  garageSaleEventId => dispatch => {
    const token = JSON.parse(localStorage.getItem('gSaleToken'));
    return superagent
      .delete(
        `https://gsale-backend.herokuapp.com/api/garageSaleEvents/${garageSaleEventId}`
      )
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        dispatch(currentGarageSaleEventDelete(res.body));
        return res.body;
      })
      .catch(err => {
        console.log('garageSaleEventDeleteRequest Error: ', err);
        return err;
      });
  };
