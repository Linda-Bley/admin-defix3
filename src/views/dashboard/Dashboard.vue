<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-card>
        <v-card-title class="align-start">
          <span class="font-weight-semibold">Total coins</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-divider class="my-2"></v-divider>
        <v-card-text>
          <v-row>
            <v-col
              v-for="item in dataBalance"
              :key="item.title"
              cols="6"
              md="4"
              class="d-flex align-center"
            >
              <v-avatar
                size="44"
                rounded
              >
                <v-img class="elevation-1" :src="item.img" />
                <!-- <v-icon
                  dark
                  color="white"
                  size="30"
                >
                  {{ item.icon }}
                </v-icon> -->
              </v-avatar>
              <div class="ms-3">
                <p class="text-xs mb-0">
                  {{ item.title }}
                </p>
                <h3 class="text-xl font-weight-semibold">
                  {{ item.total }}
                </h3>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col
      cols="12"
    >
      <total-transaction></total-transaction>
    </v-col>

    <v-col
      cols="12"
    >
      <dashboard-card-total-earning></dashboard-card-total-earning>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <dashboard-card-sales-by-countries></dashboard-card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-card-deposit-and-withdraw></dashboard-card-deposit-and-withdraw>
    </v-col>
    <v-col cols="12">
      <dashboard-datatable></dashboard-datatable>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline, mdiCurrencyBtc, mdiEthereum } from '@mdi/js'
// import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'

// demos
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue'
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import TotalTransaction from './totalTransaction.vue'

export default {
  components: {
    // StatisticsCardVertical,
    DashboardCongratulationJohn,
    DashboardStatisticsCard,
    TotalTransaction,
    //DashboardCardTotalEarning,
    //DashboardCardDepositAndWithdraw,
    //DashboardCardSalesByCountries,
    //DashboardWeeklyOverview,
    //DashboardDatatable,
  },
  data() {
    return {
      dataBalance: [],
    }
  },
  mounted() {
    this.balance()
  },
  methods: {
    balance() {
      var image = ''
      // this.axios.defaults.headers.common.Authorization = localStorage.Authorization
      this.axios.get('/get-balance-defix').then(response => {
        // console.log(response.data)
        response.data.forEach(element => {
          this.dataBalance.push({
            title: element.coin,
            total: element.balance.toFixed(4),
            icon: mdiCurrencyBtc,
            color: 'primary',
            img: require('@/assets/images/defix/coins/' + element.coin + '.png')
          })
        })
        console.log(this.dataBalance)
      }).catch(err => {
        console.log(err)
      })
    },
  },
}
</script>
