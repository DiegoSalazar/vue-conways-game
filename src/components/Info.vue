<template>
  <div>
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

    <q-btn
      type="a"
      href="https://github.com/DiegoSalazar/ConwaysGameOfLife"
      label="See the source on Github"
      target="_blank"
      rounded
      color="primary"
      text-color="white"
      icon="file_copy"
      class="full-width q-mt-md"
    />

    <div class="q-pa-sm q-mt-md">
      <p class="repo-owner">
        <a href=""></a>
        Vue.js implementation by
        <a href="https://github.com/DiegoSalazar">DiegoSalazar</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="scss" scoped>
</style>
