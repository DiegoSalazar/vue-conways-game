<template>
  <q-page-container>
    <q-drawer
      v-model="drawerOpen"
      side="right"
      show-if-above
    >
      <div class="q-pa-sm">
        <Status class="q-mb-md" />
        <Controls @click="sendControl" />
        <Settings @update="updateSettings" />

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

    <Game :settings="settings" />
  </q-page-container>
</template>

<style>
#conways {
  width: 100vw;
  height: 80vh;
}
</style>

<script>
import Status from '../components/Status.vue'
import Controls from '../components/Controls.vue'
import Settings from '../components/Settings.vue'
import Info from '../components/Info.vue'
import Game from '../components/conways/Game.vue'

export default {
  name: 'PageIndex',
  components: { Status, Controls, Settings, Info, Game },
  props: {
    drawerOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      settings: {
        preSeed: 'Gospers',
        renderStyle: 'Blocky',
        fps: 30,
        width: 800,
        height: 600,
        unit: 10
      }
    }
  },
  methods: {
    sendControl (control) {
      console.log({ control })
    },
    updateSettings (newSettings) {
      this.settings = newSettings
    }
  }
}
</script>
