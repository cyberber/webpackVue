<template>
    <div class="home">
        <h1>home</h1>
        <article>
            哈哈1121
            <input type="text" id="debounce">
        </article>

    </div>
</template>

<script>
    export default {
        mounted() {
            function doAjax(content) {
                console.log('userRequest' + '  ' + content)
            }
            function doBounce(func,dely) {
                let timer = null
                return function(argu) {
                    let _this = this
                    let _args = argu
                    clearInterval(timer)
                    timer = setTimeout(function() {
                        func.call(_this,_argu)
                    },dely)
                }
            }
            let Ele = document.getElementById('debounce');
            let Ajaxdebounce = doBounce(doAjax, 1000)

            Ele.addEventListener('keyup', (e)=> {
                Ajaxdebounce(e.target.value)
            })

        }
        
    }
</script>

<style lang="scss" scoped>
.home {
    color: red;
    font-size: 20px;
}

</style>