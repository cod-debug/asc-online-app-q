<template>
  <div style="padding: 20px 8px;">
    <!-- in this part is to check which components to load -->

    <!-- if user logged === admin, render component below -->
    <!-- <AdminComponentsHere /> -->

    <!-- if user logged === application, render component below -->
    <ApplicationList />
  </div>
</template>

<script>
  import ApplicationList from "components/Applicant/S1Forms/ApplicationList";
  export default {
    components: {
      ApplicationList
    }

  }
</script>
