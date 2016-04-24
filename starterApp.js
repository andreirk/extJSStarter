Ext.application({
    name:'app',
    requires : ['Ext.window.MessageBox', 'app.extJsBook'],
    launch: function  () {

        var book = Ext.create('app.extJsBook');

        Ext.create('Ext.container.Viewport',{
            layout:'fit',
            items:[{
                xtype:'panel',
                width:300,
                html:'A Panel inside viewport',
                title:'Viewport Panel'
            }]
        });

        // var extjsBookPanel = Ext.create('Ext.panel.Panel',{
        //     bodyPadding: 5,
        //     width : 300,
        //     title: 'extjsBookPanel',
        //     items:[{
        //         xtype:'textfield',
        //         fieldLabel: 'Publish date'
        //     }
        //          ,
        //         // Ext.create('app.extjsButton', {
        //         //     text: 'Custom button instantiated using Ext.create()'
        //         // })
        //         // ,
        //         {
        //             xtype: 'extjsButton',
        //             text: 'Custom button instantiated using xtype'
        //         }
        //     ],
        //     renderTo: Ext.getBody()
        // });


        // book.setTitle("ExtJSStarter");
        // book.setPrice('10$');
        // book.setAuthor('John');
        //
        // console.log('Message 1 -', book.getTitle() );
        //
        // Ext.Msg.alert('Message 1 - ', book.getTitle());
        //
        // var book2 = Ext.create('app.extJsBook', {
        //     title:"Ext JS Upgrade",
        //     author:'Alex',
        //     price:'20$',
        // });
        //
        // Ext.Msg.alert("Message 2 - ", book2.getTitle());
    }
});












