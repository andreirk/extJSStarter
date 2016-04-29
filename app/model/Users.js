/**
 * Created by acer on 4/24/2016.
 */

Ext.define('app.model.Users',{
    extend:"Ext.data.Model",
    idProperty:'name', //default to id
    fields:[
        {name:'name',type:'string'},
        {name:'email',type:'string'},
        {name:'age',type:'int'},
        {name:'employed', type:'boolean'}
    ],
    capitalizeName:function () {
        this.set('name',Ext.util.Format.uppercase(this.get('name')));
    },
    // ,
    // validations:[
    //     {type:'length',field:'age',min:2}
    // ]
    //
    // ,
    proxy:{
        type:'ajax',
        url:'../extJSStarter/data/Users.json'
    }

});

var extJS_UserStore = Ext.create('Ext.data.Store',{
    model:'app.model.Users',
    autoload:true
    // data: [
    //     {"name":"David",  "email":"david@motorola.com",  "age":32,   "employed":true},
    //     {"name":"Jonny",  "email":"jonny@motorola.com",  "age":20,   "employed":false},
    //     {"name":"antony", "email":"antony@motorola.com", "age":42.5, "employed":true},
    //     {"name":"stefiry","email":"stefiry@motorola.com","age":26,   "employed":true},
    //     {"name":"falny",  "email":"falny@motorola.com",  "age":23,   "employed":true}
    // ]




});

