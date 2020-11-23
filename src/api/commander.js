import {getApi} from '.';

export const APIGetCommanders = async () => {
  return (await getApi('/commanders', {})) || [];
};

export const APIGetCommander = async (id) => {
  return (await getApi(`/commanders/${id}`)) || null;
};
