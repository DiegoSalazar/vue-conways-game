<template>
  <div class="q-pa-sm">
    <q-list>
      <q-item>
        <q-item-section thumbnail>
          <q-badge color="primary">
            W
          </q-badge>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="width"
            :min="0"
            :max="1000"
            label
            label-always
            :label-value="width + 'px'"
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
            v-model="height"
            :min="0"
            :max="1000"
            label
            label-always
            :label-value="height + 'px'"
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
            v-model="unit"
            :min="1"
            :max="10"
            label
            label-always
            markers
            :label-value="unit + 'px'"
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
            v-model="fps"
            :min="0"
            :max="60"
            label
            label-always
            markers
            :label-value="fps + 'px'"
            color="grey-8"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      fps: 30,
      width: 800,
      height: 600,
      unit: 10
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
