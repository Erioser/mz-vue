<template>

    <div class="app-content-item"><slot></slot></div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .app-content-item {
        width: 25%;
        font-size: .426667rem;
        line-height: 1.226667rem;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        color: #838383;
        border-bottom: #ebebeb 1px solid;

        &.active {
                color: #e2941a;
        }
    }
    
</style>
