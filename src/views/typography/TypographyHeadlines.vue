<template>
  <v-card>
    <v-card-title>Transaction History</v-card-title>
    <v-row class="ma-0 pb-5 px-2">
      <v-col class="col-offset-6 col-6">
        <v-text-field v-model="search" outlined></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="dataHistory"
          :items-per-page="10"
          :search="search"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Emisor',
            // align: 'start',
            // sortable: false,
            value: 'emisor',
          },
          { text: 'Receptor', value: 'receptor' },
          { text: 'Fecha', value: 'fecha' },
          { text: 'Moneda', value: 'moneda' },
          { text: 'Valor', value: 'valor' },
        ],
        dataHistory: [],
      }
    },
    mounted() {
      this.historyTrans()
    },
    methods: {
      historyTrans() {
        this.axios.post('/get-transaction-history', {
          defixId: "%",
          coin: "%",
          date_year: "%",
          date_month: "%"
        }).then(response => {
          console.log(response.data)
          response.data.forEach(element => {
            this.dataHistory.push({
              emisor: element.from_defix,
              receptor: element.to_defix,
              fecha: element.date_fech,
              moneda: element.coin,
              valor: element.value,
            })
          })
        }).catch(err => {
          console.log(err)
        })
      },
    },
  }
</script>
