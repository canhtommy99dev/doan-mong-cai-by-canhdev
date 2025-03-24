import instantExportsApis from "./custom-axios";

const getListEvents = () => {
  return instantExportsApis.get(
    `/list-api-sources?populate=url_title&sort=createdAt:desc`
  );
};

// const getListMoneyWithDraw = () => {
//   return instantExportsAPIAXIOS.get(`/list_manager_withdraw`);
// };

// const putAPIChangeMoney = (id, priceMoney, idUser) => {
//   return instantExportsAPIAXIOS.put(`/put_withdraw_money/${id}`, {
//     priceMoney: priceMoney,
//     idUser: idUser,
//   });
// };

// const getListPageWithdrawMoney = (page, keySearch) => {
//   return instantExportsAPIAXIOS.get(
//     `/get_search_user_withdraw?page=${page}&size=30&key_search=${keySearch}`
//   );
// };

// const getInfoConfirmMoney = (id) => {
//   return instantExportsAPIAXIOS.get(`/get_id_withdraw_confirm/${id}`);
// };

export {
  getListEvents,
  // getListMoneyWithDraw,
  // putAPIChangeMoney,
  // getListPageWithdrawMoney,
  // getInfoConfirmMoney,
};
