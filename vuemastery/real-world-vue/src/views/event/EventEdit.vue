<template>
  <p>Edit the event here</p>
</template>
<script>
export default {
  //   props: ['event'],
  data: () => {
    return {
      unsavedChanges: false,
    }
  },
  beforeRouteLeave(routeTo, routeFrom, next) {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false
      }
    } else {
      next()
    }
  },
}
</script>
