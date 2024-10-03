<template>
    <div>
        <h1>Hello, Vue!</h1>
        <p>{{ data.message }}</p>
    </div>
</template>

<script>
export default {
    name: "ExampleComponent",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        console.log(this.data);
    },
};
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
