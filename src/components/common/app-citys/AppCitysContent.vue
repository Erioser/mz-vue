<template>
    <div class="app-citys-content">
        <mt-index-list>
            <mt-index-section 
                v-for = "(value, key) in cities"
                :key  = "key"
                :index="key"
            >
                <mt-cell
                    v-for = "city in value"
                    :key  = "city.id"
                    :title= "city.name" 
                ></mt-cell>
            </mt-index-section>
        </mt-index-list>
     </div>
</template>

<script>
import { IndexList, IndexSection, Cell } from 'mint-ui';
import { cities } from '@util'
export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    async beforeCreate () {
        let result = await this.$http({
            url: '/mz/v4/api/city'
        })
        this.citys = result.cities
    },
    data () {
        return {
            citys: []
        }
    },
    computed: {
        cities () {
            return cities(this.citys)
        }
    }
}
</script>

<style lang="scss">
    .app-city-content {

    }
</style>

