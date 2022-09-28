<template>
  <q-card class="my-card" style="padding: 5px 15px;">
    <q-card-section class="card-header">
      <div class="text-h6" style="font-weight: 700;font-size: 24px;">
        <i class="fa-solid fa-table-list"></i>
        S1 APPLICATION -  INDIVIDUAL
      </div>
      <div class="buttons">
        <q-btn icon="add" color="red-14" label="New Application" style="margin: 0 8px;"
          @click="addNewApplication"
        />
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
          title=""
          :data="data"
          :columns="columns"
          row-key="name"
          style="border-radius: 0px;padding-top: 5px;"
          :loading="false"
        >
          <template v-slot:header="props">
            <q-tr :props="props" style="margin-top:10px">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="custom-header-bg"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                v-for="(col,ind) in props.cols"
                :key="col.name"
                :props="props"
                :style="`${ind === 0 ? 'background-color: lightblue;' : ''}`"
                class="text-wrap-normal"
                :class="getBackgroundColor(col.value, col.name)"
              >
                <q-badge size="30px"
                  rounded
                  :color="getBadgeColor(col.value)"
                  :label="col.value"
                  v-if="isVisible(ind, props.cols)"
                  style="padding: 5px 10px;font-size: 9px;border-radius: 20px;width: 100%;justify-content: center;"
                />
                {{ ind === props.cols.length - 1 ? '' : col.value }}
              </q-td>

            </q-tr>
          </template>
        </q-table>
      <!-- </div> -->

      <q-dialog
        v-model="newApplicationDialog"
      >
        <q-card style="width: 450px">
          <div style="padding: 5px 15px;">
            <q-card-section>
              <div class="text-h6">
                New S1 Application
              </div>
            </q-card-section>

            <q-separator class="mb-5" style="margin-bottom:15px;" />

            <q-card-section class="q-pt-none">
              <q-select outlined v-model="model" :options="options" label="Application Type" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="row">
                <div class="col-sm-6">
                  <q-checkbox size="sm" color="red-14" v-model="shape1" val="shape1" label="Multiple Application" />
                </div>
                <div class="col-sm-6">
                  <q-checkbox size="sm" color="red-14" v-model="shape2" val="shape2" label="For Presentation" />
                </div>
                <div class="col-sm-12">
                  <q-input outlined standout bottom-slots v-model="searchApplication" label="Number of Applications">
                    <template v-slot:hint>
                      2 - 20 only
                    </template>
                  </q-input>
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <i>Note: This application type needs Request for Approval.</i>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div style="text-align: center;">
                <q-btn icon="send" color="red-14" label="Proceed" style="margin: 0 8px;"/>
                <q-btn icon="close" color="red-14" label="Cancel" style="margin: 0 8px;" v-close-popup />
              </div>
            </q-card-section>
          </div>



          <!-- <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions> -->
        </q-card>
      </q-dialog>

    </q-card-section>

  </q-card>
</template>

<script>
import { QSpinnerIos } from 'quasar'
export default {
  data: () => ({
    searchApplication: "",
    newApplicationDialog: false,
    shape1: "",
    shape2: "",
    model: "",
    options: [
      "SPECIAL SCREENING",
      "SPECIAL SCREENING AND CLEARING",
      "REGULAR",
      "BATCH"
    ],
    tab: 'original',
    columns: [
      {
        name: "REFERENCE_CODE",
        label: "REFERENCE CODE",
        align: 'left',
        field: row => row.reference,
        format: val => `${val}`,
        sortable: true,
      },
      {
        name: "TYPE_OF_APPLICATION",
        label: "TYPE OF APPLICATION",
        align: 'left',
        field: row => row.application_type,
        format: val => `${val}`,
        sortable: false
      },
      {
        name: "COMPANY_NAME",
        label: "COMPANY NAME",
        align: 'left',
        field: row => row.company_name,
        format: val => `${val}`,
        sortable: false
      },
      {
        name: "BRAND",
        label: "BRAND",
        align: 'left',
        field: row => row.brand,
        format: val => `${val}`,
        sortable: false
      },
      {
        name: "TYPE_OF_MEDIUM",
        label: "TYPE OF MEDIUM",
        align: 'left',
        field: row => row.type_of_medium,
        format: val => `${val}`,
        sortable: false
      },
      {
        name: "APPLICATION_STATUS",
        label: "APPLICATION STATUS",
        align: 'left',
        field: row => row.application_status,
        format: val => `${val}`,
        sortable: false
      },
      {
        name: "PAYMENT_STATUS",
        label: "PAYMENT STATUS",
        align: 'left',
        field: row => row.payment_status,
        format: val => `${val}`,
        sortable: false
      },
    ],
    data: [
      {
        reference: "50002N092722A",
        application_type: "INDIVIDUAL - REGULAR",
        company_name: "5 SECONDS ADVERTISING, INC.",
        brand: "AVON",
        type_of_medium: "OOH",
        application_status: "ON PROCESS",
        payment_status: "FOR PAYMENT",
      },
      {
        reference: "",
        application_type: "INDIVIDUAL - REGULAR",
        company_name: "022 HEALTH AND BEAUTY, INC.",
        brand: "AVON",
        type_of_medium: "PRINT",
        application_status: "S1 APPLICATION CANCELLED",
        payment_status: "UNPAID",
      },
    ]
  }),

  watch: {
    tab() {
      this.showTemporaryLoading();
    }
  },

  methods: {
    getBadgeColor(value = "") {
      return value.toLowerCase() === 'unpaid' ? "red" : "amber-13";
    },
    isVisible(index, cols = []) {
      return index === cols.length - 1;
    },
    getBackgroundColor(value = "", name = "") {
      if (name === "APPLICATION_STATUS") {
        if (value.toLowerCase() === 's1 application cancelled') {
          return "bg-pink-3";
        }
      }
      return ""
    },

    addNewApplication() {
      this.newApplicationDialog = true;
    },

    showTemporaryLoading() {
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
      }, 500)
    }
  },

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

    this.showTemporaryLoading();
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

.custom-header-bg {
  background-color: hsla(0,0%,79.2%,.438);
  white-space: inherit;
  // display: flex;
  // align-items: center;
}
.text-wrap-normal {
  white-space: normal;
}
</style>
