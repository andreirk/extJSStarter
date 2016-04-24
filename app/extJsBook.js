Ext.define('app.extJsBook', {
    xtype:'extjsButton',
    extended:'Ext.button.Button',
    // config:{
    //     title:'',
    //     price:'',
    //     author:''
    // },
    constructor:function  (config) {
        this.callParent(arguments);
   //     this.initConfig(config);
    }
    // ,

    // applyTitle: function  (value) {
    //     return Ext.String.capitalize(value.toUpperCase());
    // },
    //
    // updateAuthor: function  (newValue, oldValue) {
    //     console.log("NewVal - " + newValue + " : " + "Old Value - " + oldValue);
    // }
});