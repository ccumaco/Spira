<template>
    <div>
        <h1>Login</h1>
        <form action="/Login"
        method="POST"
        >
        <input
        type="email"
        name="email"
        id="email"
        >
        <input
        type="password"
        name="password"
        id="password"
        >
        <input type="submit">
        </form>
    </div>
</template>
<script>
export default {
    name: 'Login'
}
</script>
<style>
    *{
        text-align: center;
    }
</style>