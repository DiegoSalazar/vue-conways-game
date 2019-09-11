<template>
  <div class="q-gutter-sm q-pb-sm">
    <div class="row">
      <q-btn
        push
        class="col"
        color="white"
        text-color="primary"
        label="Play"
        @click="$emit('click', 'play')"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="info"
        label="Clear"
        @click="$emit('click', 'clear')"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="warning"
        label="Reset"
        @click="$emit('click', 'reset')"
      />
    </div>

    <div class="row">
      <q-btn
        push
        class="col"
        color="white"
        text-color="secondary"
        label="V Line"
        @click="$emit('click', 'vLine')"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="secondary"
        label="Center"
        @click="$emit('click', 'center')"
      />
      <q-btn
        push
        class="col"
        color="white"
        text-color="secondary"
        label="H Line"
        @click="$emit('click', 'hLine')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls'
}
</script>

<style lang="scss" scoped>
</style>
