/**
 * Created by acer on 4/24/2016.
 */

Ext.define('app.model.Users',{
    extend:"Ext.data.Model",
    idProperty:'name', //default to id
    fields:[
        {name:'name',type:'string'},
        {name:'email'},
        {name:'age',type:'int'},
        {name:'employed', type:'boolean'}
    ],
    capitalizeName:function () {
        this.set('name',Ext.util.Format.uppercase(this.get('name')));
    },
    validations:[
        {type:'length',field:'age',min:2}
    ],
    proxy:{
        type:'ajax',
        url:'http://localhost/extJSStarter/data/Users.json'
    }
});

var extJS_UserStore = Ext.create('Ext.data.Store',{
    model:'app.model.Users',
    autoload:true
});

