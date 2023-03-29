export const host = "http://172.16.10.80:3000";
export const API = {
  Login: `${host}/auth/login`,
  RoomHistory: `${host}/room/list`,
  MyProfile: `${host}/user/profile`,
  ChatHistory: `${host}/:roomId/history`,
};

export const getMyProfile = (key: string) => {
  const saved = localStorage.getItem(key);
  if (!saved) return key;
  const initial = JSON.parse(saved);
  return initial;
};
