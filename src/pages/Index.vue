<template>
  <q-page-container>
    <q-drawer
      v-model="drawerOpen"
      side="right"
      show-if-above
    >
      <div class="q-pa-sm">
        <Status class="q-mb-md" />
        <Controls />
        <Settings />
        <q-btn
          push
          class="block full-width q-mb-md"
          color="white"
          text-color="primary"
          label="Save"
        />
        <Info />
      </div>
    </q-drawer>

    <div class="q-pa-sm">
      <q-img
        :ratio="1"
        src="statics/conways.png"
        id="conways"
      />
    </div>
  </q-page-container>
</template>

<style>
#conways {
  width: 100vw;
  height: 80vh;
}
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
