<template>
  <div class="q-pa-sm">
    <q-markup-table
      dense
      title="Stats"
    >
      <tbody>
        <tr>
          <th class="text-right">Elapsed</th>
          <td>00:00:09</td>
        </tr>
        <tr>
          <th class="text-right">Evolving</th>
          <td>true</td>
        </tr>
        <tr>
          <th class="text-right">Live Cells</th>
          <td>2128</td>
        </tr>
        <tr>
          <th class="text-right">Max Population #</th>
          <td>3167</td>
        </tr>
        <tr>
          <th class="text-right">Oldest Cell</th>
          <td>176 {x: 29, y:135}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: 'Status'
}
</script>

<style lang="scss" scoped>
</style>
