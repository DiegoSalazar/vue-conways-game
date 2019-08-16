<template>
  <div class="q-gutter-sm q-pb-sm">
    <div class="row">
      <q-btn
        push
        class="col"
        color="white"
        text-color="primary"
        label="Play"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="info"
        label="Clear"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="warning"
        label="Reset"
      />
    </div>

    <div class="row">
      <q-btn
        push
        class="col"
        color="white"
        text-color="secondary"
        label="V Line"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="secondary"
        label="Center"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="secondary"
        label="H Line"
      />
    </div>

    <q-select
      filled
      dense
      options-dense
      v-model="preSeed"
      :options="preSeedOptions"
      stack-label
      label="Pre Seed"
      :display-value="preSeed"
    />
    <q-select
      filled
      dense
      options-dense
      v-model="renderStyle"
      :options="renderStyleOptions"
      stack-label
      label="Render Style"
      :display-value="renderStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'Controls',
  data () {
    return {
      preSeed: 'Gospers',
      renderStyle: 'Blocky',
      preSeedOptions: [
        'Gospers',
        'Sword'
      ],
      renderStyleOptions: [
        'Blocky',
        'Round'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
