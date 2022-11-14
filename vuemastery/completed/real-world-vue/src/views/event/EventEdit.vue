<template>
  <p>Edit the event here</p>
  <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
  <button @click="increaseCapacity()">Increase Capacity</button>
  <h3>Attending</h3>
  <ul>
    <li v-for="(name, index) in attending" :key="index">
      {{ name }}
    </li>
  </ul>
</template>
<script>
import useEventSpace from '@/use/event-space'

export default {
  //   props: ['event'],
  data: () => {
    return {
      unsavedChanges: false,
    }
  },
  //   https://www.vuemastery.com/courses/vue-3-essentials/setup-and-reactive-references
  setup() {
    const { capacity, attending, spacesLeft, increaseCapacity } =
      useEventSpace()

    return { capacity, attending, spacesLeft, increaseCapacity }
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
