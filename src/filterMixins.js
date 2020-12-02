export default  {
    methods : {
      formatearFecha : function(date) {
        return new Date(date).toLocaleString()
      },
    }
}