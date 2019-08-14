<template>
  <q-page-container>
    <q-drawer v-model="drawerOpen" side="right">
      <div class="q-pa-md">
        <Controls />
        <Status />
        <Settings />
        <Info />
      </div>
    </q-drawer>

    <div class="q-pa-md">
      CANVAS
    </div>
  </q-page-container>
</template>

<style>
</style>

<script>
import Controls from '../components/Controls.vue'
import Status from '../components/Status.vue'
import Settings from '../components/Settings.vue'
import Info from '../components/Info.vue'

export default {
  name: 'PageIndex',
  components: { Controls, Status, Settings, Info },
  props: {
    drawerOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
