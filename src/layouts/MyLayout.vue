<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          Conways Game
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="drawerOpen = !drawerOpen"
        />
      </q-toolbar>
    </q-header>

    <router-view :drawer-open="drawerOpen" />

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          Conways Game
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawerOpen: true
    }
  }
}
</script>
