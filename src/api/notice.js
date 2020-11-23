import {getApi} from '.';

export const APIGetNotices = async () => {
  return (await getApi('/notices', {})) || [];
};

export const APIGetNotice = async (id) => {
  return (await getApi(`/notices/${id}`)) || null;
}