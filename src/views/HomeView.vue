<template>
    <div>
    <select v-model="selected">
    <option disabled value="">Escolha um item</option>
    </select>
    <br>
<span>Selecionado: {{ selected }}</span>
</div>
</template>

<script>
new Vue({
    el: '...',
    data: {
      selected:''
    }
  });
</script>
