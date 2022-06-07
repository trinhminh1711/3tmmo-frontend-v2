<template>
  <div class="height-full">
    <div class="d-flex align-center">
      <h2 class="ml-3">Thống kê đơn hàng</h2>
      <v-alert class="ml-5 mr-0" dense type="info">
        Từ <strong class="mx-2">{{ formatIsoTime(sinceDate) }}</strong
        >đến<strong class="mx-2">{{ formatIsoTime(untilDate) }}</strong>
      </v-alert>
    </div>
    <div class="d-flex align-center mt-5">
      <div>
        <v-select
          v-model="selectOption"
          hide-details
          class="pa-0 ml-5"
          :items="itemsTime"
          dense
          label="Thời gian"
          outlined
        ></v-select>
      </div>
      <div>
        <v-select
          v-model="selectUser"
          hide-details
          class="pa-0 ml-5"
          :items="itemsUser"
          dense
          label="User"
          outlined
        ></v-select>
      </div>
      <div v-if="showSelectDate" class="d-flex align-center">
        <div>
          <div
            @mouseover="selectSince = true"
            @mouseleave="selectSince = false"
            class="relative pl-4"
          >
            <input
              disabled
              :placeholder="formatIsoTime(sinceDateShow)"
              class="input-type"
              type="text"
            />
            <svg
              class="icon-date"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1867 12.4399C10.3845 12.4399 10.5778 12.3813 10.7423 12.2714C10.9067 12.1615 11.0349 12.0054 11.1106 11.8226C11.1863 11.6399 11.2061 11.4388 11.1675 11.2449C11.1289 11.0509 11.0337 10.8727 10.8938 10.7328C10.754 10.593 10.5758 10.4977 10.3818 10.4592C10.1878 10.4206 9.98675 10.4404 9.80402 10.5161C9.6213 10.5917 9.46512 10.7199 9.35524 10.8844C9.24536 11.0488 9.18671 11.2422 9.18671 11.4399C9.18671 11.7052 9.29206 11.9595 9.4796 12.147C9.66714 12.3346 9.92149 12.4399 10.1867 12.4399ZM15.1867 12.4399C15.3845 12.4399 15.5778 12.3813 15.7423 12.2714C15.9067 12.1615 16.0349 12.0054 16.1106 11.8226C16.1863 11.6399 16.2061 11.4388 16.1675 11.2449C16.1289 11.0509 16.0337 10.8727 15.8938 10.7328C15.754 10.593 15.5758 10.4977 15.3818 10.4592C15.1878 10.4206 14.9867 10.4404 14.804 10.5161C14.6213 10.5917 14.4651 10.7199 14.3552 10.8844C14.2454 11.0488 14.1867 11.2422 14.1867 11.4399C14.1867 11.7052 14.2921 11.9595 14.4796 12.147C14.6671 12.3346 14.9215 12.4399 15.1867 12.4399ZM10.1867 16.4399C10.3845 16.4399 10.5778 16.3813 10.7423 16.2714C10.9067 16.1615 11.0349 16.0054 11.1106 15.8226C11.1863 15.6399 11.2061 15.4388 11.1675 15.2449C11.1289 15.0509 11.0337 14.8727 10.8938 14.7328C10.754 14.593 10.5758 14.4977 10.3818 14.4592C10.1878 14.4206 9.98675 14.4404 9.80402 14.5161C9.6213 14.5917 9.46512 14.7199 9.35524 14.8844C9.24536 15.0488 9.18671 15.2422 9.18671 15.4399C9.18671 15.7052 9.29206 15.9595 9.4796 16.147C9.66714 16.3346 9.92149 16.4399 10.1867 16.4399ZM15.1867 16.4399C15.3845 16.4399 15.5778 16.3813 15.7423 16.2714C15.9067 16.1615 16.0349 16.0054 16.1106 15.8226C16.1863 15.6399 16.2061 15.4388 16.1675 15.2449C16.1289 15.0509 16.0337 14.8727 15.8938 14.7328C15.754 14.593 15.5758 14.4977 15.3818 14.4592C15.1878 14.4206 14.9867 14.4404 14.804 14.5161C14.6213 14.5917 14.4651 14.7199 14.3552 14.8844C14.2454 15.0488 14.1867 15.2422 14.1867 15.4399C14.1867 15.7052 14.2921 15.9595 14.4796 16.147C14.6671 16.3346 14.9215 16.4399 15.1867 16.4399ZM5.18671 12.4399C5.38449 12.4399 5.57783 12.3813 5.74228 12.2714C5.90673 12.1615 6.0349 12.0054 6.11059 11.8226C6.18627 11.6399 6.20608 11.4388 6.16749 11.2449C6.12891 11.0509 6.03367 10.8727 5.89381 10.7328C5.75396 10.593 5.57578 10.4977 5.3818 10.4592C5.18782 10.4206 4.98675 10.4404 4.80402 10.5161C4.6213 10.5917 4.46512 10.7199 4.35524 10.8844C4.24536 11.0488 4.18671 11.2422 4.18671 11.4399C4.18671 11.7052 4.29206 11.9595 4.4796 12.147C4.66714 12.3346 4.92149 12.4399 5.18671 12.4399ZM17.1867 2.43994H16.1867V1.43994C16.1867 1.17472 16.0814 0.920371 15.8938 0.732835C15.7063 0.545298 15.4519 0.439941 15.1867 0.439941C14.9215 0.439941 14.6671 0.545298 14.4796 0.732835C14.2921 0.920371 14.1867 1.17472 14.1867 1.43994V2.43994H6.18671V1.43994C6.18671 1.17472 6.08135 0.920371 5.89381 0.732835C5.70628 0.545298 5.45192 0.439941 5.18671 0.439941C4.92149 0.439941 4.66714 0.545298 4.4796 0.732835C4.29206 0.920371 4.18671 1.17472 4.18671 1.43994V2.43994H3.18671C2.39106 2.43994 1.628 2.75601 1.06539 3.31862C0.502777 3.88123 0.186707 4.64429 0.186707 5.43994V17.4399C0.186707 18.2356 0.502777 18.9987 1.06539 19.5613C1.628 20.1239 2.39106 20.4399 3.18671 20.4399H17.1867C17.9824 20.4399 18.7454 20.1239 19.308 19.5613C19.8706 18.9987 20.1867 18.2356 20.1867 17.4399V5.43994C20.1867 4.64429 19.8706 3.88123 19.308 3.31862C18.7454 2.75601 17.9824 2.43994 17.1867 2.43994ZM18.1867 17.4399C18.1867 17.7052 18.0814 17.9595 17.8938 18.147C17.7063 18.3346 17.4519 18.4399 17.1867 18.4399H3.18671C2.92149 18.4399 2.66714 18.3346 2.4796 18.147C2.29206 17.9595 2.18671 17.7052 2.18671 17.4399V8.43994H18.1867V17.4399ZM18.1867 6.43994H2.18671V5.43994C2.18671 5.17473 2.29206 4.92037 2.4796 4.73283C2.66714 4.5453 2.92149 4.43994 3.18671 4.43994H17.1867C17.4519 4.43994 17.7063 4.5453 17.8938 4.73283C18.0814 4.92037 18.1867 5.17473 18.1867 5.43994V6.43994ZM5.18671 16.4399C5.38449 16.4399 5.57783 16.3813 5.74228 16.2714C5.90673 16.1615 6.0349 16.0054 6.11059 15.8226C6.18627 15.6399 6.20608 15.4388 6.16749 15.2449C6.12891 15.0509 6.03367 14.8727 5.89381 14.7328C5.75396 14.593 5.57578 14.4977 5.3818 14.4592C5.18782 14.4206 4.98675 14.4404 4.80402 14.5161C4.6213 14.5917 4.46512 14.7199 4.35524 14.8844C4.24536 15.0488 4.18671 15.2422 4.18671 15.4399C4.18671 15.7052 4.29206 15.9595 4.4796 16.147C4.66714 16.3346 4.92149 16.4399 5.18671 16.4399Z"
                fill="#8D8E92"
              />
            </svg>
            <vc-date-picker
              class="absolute time-picker"
              @mouseover="selectSince = true"
              v-if="selectSince"
              v-model="sinceDateShow"
              mode="date"
            />
          </div>
        </div>
        <div
          @mouseover="selectUntil = true"
          @mouseleave="selectUntil = false"
          class="relative pl-8"
        >
          <input
            disabled
            :placeholder="formatIsoTime(untilDateShow)"
            class="input-type"
            type="text"
          />
          <svg
            class="icon-date"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1867 12.4399C10.3845 12.4399 10.5778 12.3813 10.7423 12.2714C10.9067 12.1615 11.0349 12.0054 11.1106 11.8226C11.1863 11.6399 11.2061 11.4388 11.1675 11.2449C11.1289 11.0509 11.0337 10.8727 10.8938 10.7328C10.754 10.593 10.5758 10.4977 10.3818 10.4592C10.1878 10.4206 9.98675 10.4404 9.80402 10.5161C9.6213 10.5917 9.46512 10.7199 9.35524 10.8844C9.24536 11.0488 9.18671 11.2422 9.18671 11.4399C9.18671 11.7052 9.29206 11.9595 9.4796 12.147C9.66714 12.3346 9.92149 12.4399 10.1867 12.4399ZM15.1867 12.4399C15.3845 12.4399 15.5778 12.3813 15.7423 12.2714C15.9067 12.1615 16.0349 12.0054 16.1106 11.8226C16.1863 11.6399 16.2061 11.4388 16.1675 11.2449C16.1289 11.0509 16.0337 10.8727 15.8938 10.7328C15.754 10.593 15.5758 10.4977 15.3818 10.4592C15.1878 10.4206 14.9867 10.4404 14.804 10.5161C14.6213 10.5917 14.4651 10.7199 14.3552 10.8844C14.2454 11.0488 14.1867 11.2422 14.1867 11.4399C14.1867 11.7052 14.2921 11.9595 14.4796 12.147C14.6671 12.3346 14.9215 12.4399 15.1867 12.4399ZM10.1867 16.4399C10.3845 16.4399 10.5778 16.3813 10.7423 16.2714C10.9067 16.1615 11.0349 16.0054 11.1106 15.8226C11.1863 15.6399 11.2061 15.4388 11.1675 15.2449C11.1289 15.0509 11.0337 14.8727 10.8938 14.7328C10.754 14.593 10.5758 14.4977 10.3818 14.4592C10.1878 14.4206 9.98675 14.4404 9.80402 14.5161C9.6213 14.5917 9.46512 14.7199 9.35524 14.8844C9.24536 15.0488 9.18671 15.2422 9.18671 15.4399C9.18671 15.7052 9.29206 15.9595 9.4796 16.147C9.66714 16.3346 9.92149 16.4399 10.1867 16.4399ZM15.1867 16.4399C15.3845 16.4399 15.5778 16.3813 15.7423 16.2714C15.9067 16.1615 16.0349 16.0054 16.1106 15.8226C16.1863 15.6399 16.2061 15.4388 16.1675 15.2449C16.1289 15.0509 16.0337 14.8727 15.8938 14.7328C15.754 14.593 15.5758 14.4977 15.3818 14.4592C15.1878 14.4206 14.9867 14.4404 14.804 14.5161C14.6213 14.5917 14.4651 14.7199 14.3552 14.8844C14.2454 15.0488 14.1867 15.2422 14.1867 15.4399C14.1867 15.7052 14.2921 15.9595 14.4796 16.147C14.6671 16.3346 14.9215 16.4399 15.1867 16.4399ZM5.18671 12.4399C5.38449 12.4399 5.57783 12.3813 5.74228 12.2714C5.90673 12.1615 6.0349 12.0054 6.11059 11.8226C6.18627 11.6399 6.20608 11.4388 6.16749 11.2449C6.12891 11.0509 6.03367 10.8727 5.89381 10.7328C5.75396 10.593 5.57578 10.4977 5.3818 10.4592C5.18782 10.4206 4.98675 10.4404 4.80402 10.5161C4.6213 10.5917 4.46512 10.7199 4.35524 10.8844C4.24536 11.0488 4.18671 11.2422 4.18671 11.4399C4.18671 11.7052 4.29206 11.9595 4.4796 12.147C4.66714 12.3346 4.92149 12.4399 5.18671 12.4399ZM17.1867 2.43994H16.1867V1.43994C16.1867 1.17472 16.0814 0.920371 15.8938 0.732835C15.7063 0.545298 15.4519 0.439941 15.1867 0.439941C14.9215 0.439941 14.6671 0.545298 14.4796 0.732835C14.2921 0.920371 14.1867 1.17472 14.1867 1.43994V2.43994H6.18671V1.43994C6.18671 1.17472 6.08135 0.920371 5.89381 0.732835C5.70628 0.545298 5.45192 0.439941 5.18671 0.439941C4.92149 0.439941 4.66714 0.545298 4.4796 0.732835C4.29206 0.920371 4.18671 1.17472 4.18671 1.43994V2.43994H3.18671C2.39106 2.43994 1.628 2.75601 1.06539 3.31862C0.502777 3.88123 0.186707 4.64429 0.186707 5.43994V17.4399C0.186707 18.2356 0.502777 18.9987 1.06539 19.5613C1.628 20.1239 2.39106 20.4399 3.18671 20.4399H17.1867C17.9824 20.4399 18.7454 20.1239 19.308 19.5613C19.8706 18.9987 20.1867 18.2356 20.1867 17.4399V5.43994C20.1867 4.64429 19.8706 3.88123 19.308 3.31862C18.7454 2.75601 17.9824 2.43994 17.1867 2.43994ZM18.1867 17.4399C18.1867 17.7052 18.0814 17.9595 17.8938 18.147C17.7063 18.3346 17.4519 18.4399 17.1867 18.4399H3.18671C2.92149 18.4399 2.66714 18.3346 2.4796 18.147C2.29206 17.9595 2.18671 17.7052 2.18671 17.4399V8.43994H18.1867V17.4399ZM18.1867 6.43994H2.18671V5.43994C2.18671 5.17473 2.29206 4.92037 2.4796 4.73283C2.66714 4.5453 2.92149 4.43994 3.18671 4.43994H17.1867C17.4519 4.43994 17.7063 4.5453 17.8938 4.73283C18.0814 4.92037 18.1867 5.17473 18.1867 5.43994V6.43994ZM5.18671 16.4399C5.38449 16.4399 5.57783 16.3813 5.74228 16.2714C5.90673 16.1615 6.0349 16.0054 6.11059 15.8226C6.18627 15.6399 6.20608 15.4388 6.16749 15.2449C6.12891 15.0509 6.03367 14.8727 5.89381 14.7328C5.75396 14.593 5.57578 14.4977 5.3818 14.4592C5.18782 14.4206 4.98675 14.4404 4.80402 14.5161C4.6213 14.5917 4.46512 14.7199 4.35524 14.8844C4.24536 15.0488 4.18671 15.2422 4.18671 15.4399C4.18671 15.7052 4.29206 15.9595 4.4796 16.147C4.66714 16.3346 4.92149 16.4399 5.18671 16.4399Z"
              fill="#8D8E92"
            />
          </svg>
          <vc-date-picker
            class="absolute time-picker"
            @mouseover="selectUntil = true"
            v-if="selectUntil"
            v-model="untilDateShow"
            mode="date"
          />
        </div>
      </div>
    </div>
    <h3 class="ml-3 mt-10 ml-5" v-if="showTitle">
      Tổng hoa hồng tạm duyệt : {{ sumAllOrder }}
    </h3>
    <v-simple-table class="ml-5 mt-5">
      <template v-slot:default>
        <thead>
          <tr>
            <th
              v-for="(label, index) in headers"
              :key="index"
              class="text-left"
            >
              {{ label.text }}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in desserts" :key="idx">
            <td class="ml-4" v-for="(label, index) in headers" :key="index">
              <p>{{ item[label.key] }}</p>
            </td>
            <td>
              <v-btn @click="viewDetailOrder(item)" depressed small>
                <v-icon>mdi-television</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
        <tfoot align="center">
          <tr>
            <td v-if="showTitle" colspan="8">
              Tổng hoa hổng : {{ sumAllOrder }}
            </td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
    <v-dialog v-model="viewDetail" width="90%">
      <v-card-title class="text-h5 grey lighten-2">
        Thông tin chi tiêt
      </v-card-title>
      <v-data-table
        :headers="headersViewDetail"
        :items="itemViewDetail"
        :items-per-page="10"
        class="elevation-1"
      >
      <template v-slot:item.is_confirmed="{ item }">
      <v-chip
        :color="getColor(item.is_confirmed)"
        dark
      >
        {{ item.is_confirmed }}
      </v-chip>
    </template>
    <template v-slot:item.order_status="{ item }">
      <v-chip
        :color="getColorStatus(item.order_status)"
        dark
      >
        {{ item.order_status }}
      </v-chip>
    </template>
      </v-data-table>
      <v-card-title class="text-h5 grey lighten-2">
        Tổng hoa hồng tạm duyệt : {{ sumIncomeDetail }}
      </v-card-title>
    </v-dialog>
  </div>
</template>
<script>
import * as checkPermision from "../../../permission/checkPermission";
import * as convertId from "../../../function/converIdUser";
import * as get from "../../../api/user/getListF0";
import * as order from "../../../api/statistic/order";
export default {
  data() {
    return {
      headers: [
        {
          text: "Đối tác",
          key: "merchant",
        },
        {
          text: "Mã user",
          key: "utm_source",
        },
        {
          text: "Hoa hồng ( Tạm Duyệt )",
          key: "merchant",
        },
        {
          text: "Tạm duyệt",
          key: "approved",
        },
        {
          text: "Chờ xử lý",
          key: "pending",
        },
        {
          text: "Bị hủy",
          key: "rejected",
        },
        {
          text: "Tổng hoa hồng ( Tạm Duyệt )",
          key: "sum",
        },
      ],
      headersViewDetail: [
        { text: "Đối tác", value: "merchant" },
        { text: "Trạng thái duyệt", value: "is_confirmed", sortable: false },
        { text: "Trạng thái đơn hàng", value: "order_status", sortable: false },
        { text: "Hoa hồng", value: "reality_commission" },
        { text: "Thời gian click", value: "click_time" },
        { text: "Thời gian mua", value: "sales_time" },
        { text: "Thời gian xác nhận", value: "confirmed_time" },
        { text: "Thiết bị", value: "device" },
      ],
      itemViewDetail: [],
      sumIncomeDetail: 0,
      desserts: [],
      selectUntil: false,
      selectSince: false,
      selectUntilDate: new Date(),
      selectSinceDate: new Date(),
      showSelectDate: false,
      sumAllOrder: 0,
      showTitle: false,
      persentReject: 0,
      selectOption: "",
      viewDetail: false,
      itemsTime: [
        "Hôm nay",
        "Hôm qua",
        "Tháng này",
        "Tháng trước",
        "Chọn thời gian",
      ],
      sinceDate: new Date(),
      untilDate: new Date(),
      untilDateShow: new Date(),
      sinceDateShow: new Date(),
      options: {
        timeZone: "UTC",
      },
      selectUser: convertId.convertId(sessionStorage.getItem("IdUser")),
      itemsUser: [],
      timezone: "",
    };
  },
  async created() {
    await this.resetTime();
    this.untilDateShow.setUTCHours(0, 0, 0, 0);
    this.sinceDateShow.setUTCHours(0, 0, 0, 0);
  },

  async mounted() {
    const roles = await checkPermision.checkPermission();
    let listUser = [];
    if (roles == 0) {
      listUser = await get.getAllUser();
      listUser.forEach((user) => {
        this.itemsUser.push(convertId.convertId(user.user_id));
      });
    } else {
      listUser = await get.getListChildUser(
        convertId.convertId(sessionStorage.getItem("IdUser"))
      );
      listUser.forEach((user) => {
        this.itemsUser.push(convertId.convertId(user.user_id));
      });
    }
  },
  methods: {
    getColor(is_confirmed) {
      if (is_confirmed == "Chưa duyệt") return "purple";
      else return "green";
    },
    getColorStatus(order_status)
    {
      if (order_status == "Đã hủy") return "red";
      else if(order_status == "Đang xử lý") return "orange";
      else return "light-green"
    },
    resetTime() {
      this.sinceDate = new Date();
      this.untilDate = new Date();
      this.sinceDate.setUTCHours(0, 0, 0, 0);
      this.untilDate.setUTCHours(23, 59, 59);
    },
    viewDetailOrder: async function(item) {
      this.sumIncomeDetail = item.sum;
      var dataMerchant = await order.getOrderMerchant(
        this.selectUser,
        this.sinceDate.toISOString(),
        this.untilDate.toISOString(),
        item.merchant
      );
      this.viewDetail = true;
      var empty = [];
      dataMerchant.forEach((element) => {
        var obj = {};
        obj.order_id = element.order_id;
        obj.merchant = element.merchant;
        obj.is_confirmed = this.convertConfirmStatus(element.is_confirmed);
        obj.order_status = this.convertStatus(element.order_status);
        obj.reality_commission = element.reality_commission.toLocaleString(
          undefined,
          { maximumFractionDigits: 0 }
        );
        obj.click_time = this.formatUTCTime(element.click_time);
        obj.sales_time = this.formatUTCTime(element.sales_time);
        obj.confirmed_time = this.formatUTCTime(element.confirmed_time);
        obj.device = element.device;
        empty.push(obj);
      });
      this.itemViewDetail = empty;
    },
    convertConfirmStatus(status) {
      if (status == 0) {
        return "Chưa duyệt";
      } else if (status == 1) {
        return "Đã duyệt";
      }
    },
    convertStatus(status) {
      if (status == 0) {
        return "Đang xử lý";
      } else if (status == 1) {
        return "Tạm duyệt";
      }
      return "Đã hủy";
    },
    getOrder: async function() {
      this.desserts = await order.getOrderGroupUser(
        this.selectUser,
        this.sinceDate.toISOString(),
        this.untilDate.toISOString()
      );
      await this.getSumOrder(this.desserts);
    },
    getSumOrder: function(arrData) {
      var sumTotal = 0;
      var reject = 0;
      var approved = 0;
      arrData.forEach((element) => {
        sumTotal = sumTotal + element.sumNumber;
        reject = reject + element.rejected;
        approved = approved + element.approved;
      });
      if (sumTotal != 0) {
        this.showTitle = true;
      }
      this.sumAllOrder = sumTotal.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      this.persentReject = ((reject / approved) * 100).toFixed(2) + "%";
    },
    formatIsoTime(time) {
      return "00:00:00 || " + time.toISOString().split("T")[0];
    },
    formatUTCTime(time) {
      return (
        time.split("T")[1].split(":")[0] +
        ":" +
        time.split("T")[1].split(":")[1] +
        ":" +
        time.split("T")[1].split(":")[2] +
        " " +
        time.split("T")[0]
      );
    },
  },
  computed: {},
  watch: {
    selectOption: function() {
      switch (this.selectOption) {
        case "Hôm nay": {
          this.resetTime();
          this.showSelectDate = false;
          this.getOrder();
          break;
        }
        case "Hôm qua": {
          this.resetTime();
          this.showSelectDate = false;
          this.sinceDate.setUTCHours(0, 0, 0, 0);
          this.untilDate.setUTCHours(23, 59, 59);
          this.sinceDate.setDate(this.sinceDate.getDate() - 1);
          this.untilDate.setDate(this.untilDate.getDate() - 1);
          this.getOrder();
          break;
        }
        case "Tháng này": {
          this.resetTime();
          this.showSelectDate = false;
          var date = new Date();
          this.sinceDate = new Date(date.getFullYear(), date.getMonth(), 2);
          this.untilDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
          this.sinceDate.setUTCHours(0, 0, 0, 0);
          this.untilDate.setUTCHours(23, 59, 59);
          this.getOrder();
          break;
        }
        case "Tháng trước": {
          this.resetTime();
          this.showSelectDate = false;
          var date2 = new Date();
          this.sinceDate = new Date(
            date2.getFullYear(),
            date2.getMonth() - 1,
            2
          );
          this.untilDate = new Date(date2.getFullYear(), date2.getMonth(), 0);
          this.sinceDate.setUTCHours(0, 0, 0, 0);
          this.untilDate.setUTCHours(23, 59, 59);
          this.getOrder();
          break;
        }
        case "Chọn thời gian": {
          this.resetTime();
          this.showSelectDate = true;
          break;
        }
      }
    },
    selectUser: function() {
      this.getOrder();
    },
    untilDateShow: function() {
      this.untilDateShow.setUTCHours(0, 0, 0, 0);
      this.untilDate = this.untilDateShow;
    },
    sinceDateShow: function() {
      this.sinceDateShow.setUTCHours(0, 0, 0, 0);
      this.sinceDate = this.sinceDateShow;
    },
    sinceDate: function() {
      this.getOrder();
    },
    untilDate: function() {
      this.getOrder();
    },
  },
};
</script>
<style lang="scss" scoped>
.relative {
  width: 300px;
  position: relative;
}
.time-picker {
  top: 100%;
  left: 15px;
  width: 95%;
}
.absolute {
  position: absolute;
}
.date__input {
  border: solid 1px;
  border-radius: 5px;
  padding: 0.4rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.height-full {
  height: 100vh;
}
.v-text-field__details {
  position: absolute !important;
}
.input-type {
  width: 100%;
  border-radius: 5px;
  background: #ffffff;
  opacity: 0.7;
  padding: 5px 20px;
  border: 1px solid #d0d0d0;
  box-sizing: border-box;
}
.input-type:hover,
.icon-date:hover {
  cursor: pointer;
}
.icon-date {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
