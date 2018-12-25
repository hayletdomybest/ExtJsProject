/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DemoApp.Application',

    name: 'DemoApp',

    requires: [
        'DemoApp.view.main.Table' ,
        'Ext.panel.Panel'     
    ],

    // The name of the initial view to create.
    //mainView: 'DemoApp.view.main.Main'

    launch : function(){
        Ext.create('DemoApp.view.main.Main');
    }
 /*   
    launch : function() {

        var store = Ext.create('DemoApp.store.UV');
        var mydata = [];
        //store.load();
        Ext.Ajax.setUseDefaultXhrHeader(false);
        store.load({
            callback: function(records, operation, success) {
                mydata = store.first();
                console.log(mydata.data);
            }
        });
        var grid= Ext.create({
            xtype : 'gridpanel',
            renderTo : Ext.getBody(),
            store : store,
            columns: [
                { text: 'County',  dataIndex: 'County' },
                { text: 'PublishAgency', dataIndex: 'PublishAgency', flex: 1 },
                { text: 'PublishTime', dataIndex: 'PublishTime', flex: 1 },
                { text: 'SiteName', dataIndex: 'SiteName', flex: 1 },
                { text: 'UVI', dataIndex: 'UVI', flex: 1 },
                { text: 'WGS84Lat', dataIndex: 'WGS84Lat', flex: 1 },
                { text: 'WGS84Lon', dataIndex: 'WGS84Lon', flex: 1 }
            ]
        });
    }*/
});
