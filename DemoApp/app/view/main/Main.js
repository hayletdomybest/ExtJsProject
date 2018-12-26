/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DemoApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    layout: 'border',
    bodyBorder: false,
    requires: [
        'DemoApp.view.main.Table' ,
        //'Ext.panel.Panel'     
    ],
    defaults: {
        //collapsible: true,
        split: true,
        //bodyPadding: 5
    },
    items: [{
        title: '<div style="text-align:center;">台灣天氣</div>',
        xtype: 'panel',
        collapsible: false,
        region: 'north'
    },{
        title: '功能表',
        xtype: 'maintree',
        region:'west',
        floatable: false,
        margins: '5 0 0 0',
        width: 175,
        minWidth: 100,
        maxWidth: 250,
    },{
        title: '詳細資料',
        collapsible: false,
        xtype:'maintable',
        region: 'center',
        margins: '5 0 0 0',
    }]
});
