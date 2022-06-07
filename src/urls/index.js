const urls = {
  Login: {
    master: "http://localhost:5000/login",
  },
  Register: {
    master: "http://localhost:5000/customers",
  },
  Account :{
    master : "http://localhost:5000/accountkey",
    deleteAccount : "http://localhost:5000/delete/accountkey",
    addAccount : "http://localhost:5000/add/accountkey"
  },
  User: {
    getById: "http://localhost:5000/customers/",
    addUser: "http://localhost:5000/customers/",
    password: "http://localhost:5000/password/",
    updatePassword: "http://localhost:5000/update/password/",
    posterity: "http://localhost:5000/posterity",
    updateInfo: "http://localhost:5000/update/info/customers/",
    permission: "http://localhost:5000/permission/",
    getIdUser: "http://localhost:5000/userid",
    getAllUser: "http://localhost:5000/listuser",
    deleteUser: "http://localhost:5000/delete/user/",
  },
  Partner: {
    master: "http://localhost:5000/partner",
    update: "http://localhost:5000/update/partner",
    add: "http://localhost:5000/add/partner",
    delete: "http://localhost:5000/delete/partner",
  },
  Notification: {
    add: "http://localhost:5000/add/notifications",
    get: "http://localhost:5000/get/notifications",
    getLastUpdate: "http://localhost:5000/getlastest/notifications",
    delete: "http://localhost:5000/delete/notifications",
  },
  Order: {
    getAllOrder: "https://api.accesstrade.vn/v1/orders",
    getOrderUser: "http://localhost:5000/order/user",
    getOrderGroup: "http://localhost:5000/order/group",
    getOrderMerchant : "http://localhost:5000/order/merchant",
    getStatusOrder: "http://localhost:5000/status/order",
    getIncome: "http://localhost:5000/income/user",
    getIncomeTime: "http://localhost:5000/income/time/user",
    getRankIncome: "http://localhost:5000/rank/user",
    getRankIncomeTime: "http://localhost:5000/rank/time/user",
  },
  Campaign: {
    getAllCampaign: "https://api.accesstrade.vn/v1/campaigns",
  },
  Transactions: {
    getAllTransactions: "https://api.accesstrade.vn/v1/transactions",
  },
  Token : {
    refreshToken : "http://localhost:5000/refresh-token"
  }
};
export default urls;
