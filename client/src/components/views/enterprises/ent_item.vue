<template>
  <div :key="enterprise.id">
    <h3>{{ enterprise.fantasia }}</h3>
  </div>
</template>

<script>
export default {
	name: "EntItem",
	props: ["enterprise"]
};
</script>