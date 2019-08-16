<template>
  <q-expansion-item
    dense
    class="shadow-2 overflow-hidden"
    style="border-radius: 15px"
    icon="help"
    label="How To Play"
    header-class="bg-info text-white"
    expand-icon-class="text-white"
  >
    <q-card>
      <q-card-section>
        <q-list
          bordered
          separator
          class="rounded-borders"
        >
          <q-item>
            <q-item-section>Use the keyboard or buttons to control the game</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Click individual cells on/off</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Hold down the mouse and trace multiple cells</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="scss" scoped>
</style>
