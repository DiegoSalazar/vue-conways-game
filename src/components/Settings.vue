<template>
  <div class="q-pa-sm">
    <div class="q-gutter-sm q-pb-md">
      <q-select
        filled
        dense
        options-dense
        v-model="settings.preSeed"
        :options="preSeedOptions"
        stack-label
        label="Pre Seed"
        :display-value="settings.preSeed"
      />
      <q-select
        filled
        dense
        options-dense
        v-model="settings.renderStyle"
        :options="renderStyleOptions"
        stack-label
        label="Render Style"
        :display-value="settings.renderStyle"
      />
    </div>

    <q-list>
      <q-item>
        <q-item-section thumbnail>
          <q-badge color="primary">
            W
          </q-badge>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="settings.width"
            :min="0"
            :max="2560"
            label
            label-always
            :label-value="settings.width + 'px'"
            color="primary"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section thumbnail>
          <q-badge color="primary">
            H
          </q-badge>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="settings.height"
            :min="0"
            :max="1480"
            label
            label-always
            :label-value="settings.height + 'px'"
            color="primary"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section thumbnail>
          <q-badge color="grey-8">
            Unit
          </q-badge>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="settings.unit"
            :min="1"
            :max="10"
            label
            label-always
            markers
            :label-value="settings.unit + 'px'"
            color="grey-8"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section thumbnail>
          <q-badge color="grey-8">
            FPS
          </q-badge>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="settings.fps"
            :min="0"
            :max="60"
            label
            label-always
            markers
            :label-value="settings.fps + 'px'"
            color="grey-8"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import PreSeeds from './conways/PreSeeds.js'

export default {
  name: 'Settings',
  data () {
    return {
      settings: {
        preSeed: 'Gospers',
        renderStyle: 'Blocky',
        fps: 30,
        width: 800,
        height: 600,
        unit: 10
      },
      preSeedOptions: Object.keys(PreSeeds),
      renderStyleOptions: [
        'Blocky',
        'Round'
      ]
    }
  },
  watch: {
    settings: {
      handler (currentSettings) {
        this.$emit('update', currentSettings)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
