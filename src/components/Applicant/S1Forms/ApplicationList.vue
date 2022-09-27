<template>
  <q-card class="my-card" style="padding: 5px 15px;">
    <q-card-section class="card-header">
      <div class="text-h6" style="font-weight: 700;font-size: 24px;">
        <i class="fa-solid fa-table-list"></i>
        S1 APPLICATION -  INDIVIDUAL
      </div>
      <div class="buttons">
        <q-btn icon="add" color="red" label="New Application" style="margin: 0 8px;" />
        <q-btn icon="autorenew" color="primary" label="" style="margin: 0 8px;" />
      </div>
    </q-card-section>

    <q-card-section style="padding-top: 0;padding-bottom: 0;">
      <q-separator />
    </q-card-section>


    <!-- <q-separator /> -->
    <q-card-section>
      <div class="row custom-row">
        <div class="col-xs-12 col-sm-9 col-lg-9 col-lg-9">
          <q-input outlined v-model="searchApplication" label="Search Applications" />
        </div>
        <div class="col-xs-12 col-sm-3 col-lg-3 col-lg-3">
          <div class="legend-content">
            <table class="legend-table">
              <tr>
                <td>LEGEND:</td>
              </tr>
              <tr>
                <td>
                  <div class="legend-box legend-blue"></div>
                  ORIGINAL
                </td>
              </tr>
              <tr>
                <td>
                  <div class="legend-box legend-orange"></div>
                  FOR COMPLIANCE
                </td>
              </tr>
              <tr>
                <td>
                  <div class="legend-box legend-green"></div>
                  REVISION
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="left"
        indicator-color="purple"
        class="text-teal"
        style="margin-bottom:1rem;margin-top: 1rem;"
      >
        <q-tab name="original" label="Original" class="tab-item-custom">
          <q-badge color="red" rounded floating class="custom-badge">20</q-badge>
        </q-tab>
        <q-tab name="revision" label="Revision" class="tab-item-custom">
          <q-badge color="red" rounded floating class="custom-badge">200</q-badge>
        </q-tab>
        <q-tab name="compliance" label="Compliance" class="tab-item-custom">
          <q-badge color="red" rounded floating class="custom-badge">2</q-badge>
        </q-tab>
      </q-tabs>

      <!-- <div class="q-pa-md"> -->
        <q-table
          title="Treats"
          :data="data"
          :columns="columns"
          row-key="name"
        />
      <!-- </div> -->
    </q-card-section>

    <q-card-actions vertical>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { QSpinnerIos } from 'quasar'
export default {
  data: () => ({
    searchApplication: "",
    tab: 'original',
    columns: [
      {
        name: "REFERENCE_CODE",
        label: "REFERENCE CODE",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "TYPE_OF_APPLICATION",
        label: "TYPE OF APPLICATION",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "COMPANY_NAME",
        label: "COMPANY NAME",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "BRAND",
        label: "BRAND",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "TYPE_OF_MEDIUM",
        label: "TYPE OF MEDIUM",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "APPLICATION_STATUS",
        label: "APPLICATION STATUS",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "PAYMENT_STATUS",
        label: "PAYMENT STATUS",
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
    ],
    data: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
    ]
  }),

  mounted() {

    this.$q.localStorage.set('local_test', 'ambot simo dah xx1')
    let local_value = this.$q.localStorage.getItem('local_test')

    this.$q.sessionStorage.set('session_test', 'ambot simo dah xx2')
    let session_value = this.$q.sessionStorage.getItem('session_test')

    // this.$q.loading.show({
    //   // delay: 400 // ms
    // })

    // setTimeout(() => {
    //   this.$q.loading.hide()
    // }, 1000);

    this.$q.loading.show({
      spinner: QSpinnerIos,
      spinnerColor: 'white',
      spinnerSize: 140,
      // backgroundColor: 'purple',
      message: 'LOADING...',
      messageColor: 'white',
    })

    // hiding in 3s
    this.timer = setTimeout(() => {
      this.$q.loading.hide()
      this.timer = void 0
    }, 1000)
  }
}
</script>


<style lang="scss" scoped>
.card-header {
  display: flex;
  .buttons {
    margin-left: auto;
  }
}
.legend-content{
  padding: 5px 10px;
  border: rgb(218, 218, 218) solid 2px;
  border-radius: 5px;
}
.legend-table{
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  .legend-box{
    padding: 5px;
    display: inline-block;
    margin-right: 4%;
    vertical-align: sub;
    border: solid 1px rgb(138, 138, 138);
  }
  td{
    margin: auto;
    .legend-orange {
      background-color: #fca402;
    }
    .legend-green {
        background-color: #8fcf8f;
    }

    .legend-blue {
        background-color: lightblue;
    }

    .legend-red {
        background-color: #ff8a7b;
    }

    .legend-purple {
        background-color: violet;
    }

    .legend-yellow {
        background-color: yellow;
    }

    .legend-pink {
        background-color:lightpink;
    }
  }
}

.row.custom-row {
  align-items: center;
}
.row.custom-row > * {
  padding-right: calc(1.5rem * .5);
  padding-left: calc(1.5rem * .5);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.tab-item-custom {
  padding-left: 2rem;
  padding-right: 2rem;
}

.custom-badge {
  // width: 22px;
  // height: 22px;
  // line-height: 22px;
  right: -30px;
}
</style>
