<template>
  <article>
    <code>{{settings}}</code>
    <div class="q-pa-sm">
      <canvas
        ref="canvas"
        :width="settings.width"
        :height="settings.height"
      />
    </div>
  </article>
</template>

<script>
import Automaton from './Automaton.js'

export default {
  name: 'Game',
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      automaton: null
    }
  },
  mounted () {
    this.automaton = new Automaton(this.$refs.canvas, this.settings)
    this.automaton.draw()
  },
  watch: {
    settings: {
      handler (newSettings) {
        this.automaton.updateSettings(newSettings)
        this.automaton.draw()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  border: 1px solid red;
  background-color: aqua;
}
</style>
