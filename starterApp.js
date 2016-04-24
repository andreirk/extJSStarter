Ext.application({
    name:'app',
    requires : ['Ext.window.MessageBox', 'app.extJsBook'],
    launch: function () {

        var book = Ext.create('app.extJsBook');

        // Ext.create('Ext.container.Viewport',{
        //     layout:'fit',
        //     items:[{
        //         xtype:'container',
        //         // html: 'A panel inside viewport',
        //         defaults:{
        //             margin:'5,5,0,5'
        //         },
        //         layout:'vbox',
        //         items:[{
        //             xtype:'textfield',
        //             fieldLabel:'Name',
        //             style:{marginBottom:'20px',color:'blue'}
        //         },{
        //             xtype:'button',
        //             text:'submit'
        //         },
        //             {
        //                 xtype:'buttongroup',
        //                 colomns:3,
        //                 title:'Days',
        //                 items:[
        //                     {xtype:'button', text:1},
        //                     {xtype:'button', text:2},
        //                     {xtype:'button', text:3}]
        //             }
        //         ]
        //
        //     }]
        // });

        Ext.create("Ext.tab.Panel",{
         //   width:400,
         //   height:400,
            activeTab:0,
            layout:'fit',
            //layout:'ablolute',
            //x:10, y:10,
            renderTo: document.body,
            items:[
                {
                    title:'Page 1',
                    html:'Page1'
                },
                {
                    xtype:'panel',
                    title:'Page 2',
                    html:'Page2'
                }
            ]
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












