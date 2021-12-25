module.exports ={
    resolve: {
        extensions: ['.js', '.vue', '.json','.less',".svg"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),  //比如说这里的@就指向src
        }
    },
}
