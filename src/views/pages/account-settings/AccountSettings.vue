<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs
      v-model="tab"
      show-arrows
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.icon"
      >
        <v-icon
          size="20"
          class="me-3"
        >
          {{ tab.icon }}
        </v-icon>
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card>
          <v-row class="ma-0 pb-5 px-2">
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="dataUser"
                :items-per-page="10"
                class="elevation-1"
              ></v-data-table>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiLockOpenOutline, mdiInformationOutline } from '@mdi/js'

export default {
  data() {
    return {
      tabs: [
        { title: 'Lista de usuarios defix', icon: mdiAccountOutline },
      ],
      icons: {
        mdiAccountOutline,
        mdiLockOpenOutline,
        mdiInformationOutline,
      },
      headers: [
        { text: 'Usuarios', value: 'users' },
      ],
      dataUser: [],
    }
  },
  mounted() {
    this.userData()
  },
  methods: {
    userData() {
      this.axios.get('/get-users').then(response => {
        console.log(response.data)
        response.data.forEach(element => {
          this.dataUser.push({ users: element.defix_id })
        })
      }).catch(err => {
        console.log(err)
      })
    },
  },
}
</script>
