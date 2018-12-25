Ext.define('DemoApp.view.main.Table', {
    extend: 'Ext.TabPanel',
    alias: 'widget.maintable',
    //fullscreen: true,
    tabBarPosition: 'top',
    layout:'column',

    requires: [
        'Ext.panel.Panel',        
        'DemoApp.store.UV'     
    ],
    defaults: {
        styleHtmlContent: true
    },
    items: [
        {           
            title: '紫外線即時監測資料',
            xtype: 'grid',
            store : {
                type: 'UV'
            },
            columns: [
                { text: 'County',  dataIndex: 'County' },
                { text: 'PublishAgency', dataIndex: 'PublishAgency', flex: 1 },
                { text: 'PublishTime', dataIndex: 'PublishTime', flex: 1 },
                { text: 'SiteName', dataIndex: 'SiteName', flex: 1 },
                { text: 'UVI', dataIndex: 'UVI', flex: 1 },
                { text: 'WGS84Lat', dataIndex: 'WGS84Lat', flex: 1 },
                { text: 'WGS84Lon', dataIndex: 'WGS84Lon', flex: 1 }
            ]
        },
        {
            title: '紫外線測站基本資料',
            xtype: 'panel'
        }
    ],
});

