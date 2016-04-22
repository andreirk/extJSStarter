Ext.application({
    name:'app',
    requires : ['Ext.window.MessageBox', 'app.extJsBook'],
    launch: function  () {
        console.log("Welcome to Ext Starter Tutorial");
        Ext.Msg.alert("Message", "Welcome to Ext Starter Tutorial");

        var book = Ext.create('app.extJsBook');
        book.setTitle("ExtJSStarter");
        book.setPrice('10$');
        book.setAuthor('John');

        console.log('Message 1 -', book.getTitle() );

        Ext.Msg.alert('Message 1 - ', book.getTitle());

        var book2 = Ext.create('app.extJsBook', {
            title:"Ext JS Upgrade",
            author:'Alex',
            price:'20$',
        });

        Ext.Msg.alert("Message 2 - ", book2.getTitle());
    }
});












