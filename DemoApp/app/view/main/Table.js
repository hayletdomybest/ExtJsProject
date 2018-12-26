var mystore = Ext.create('DemoApp.store.UV');
var mystore_std = Ext.create('DemoApp.store.UV_std');
var myUVgrid = Ext.create('Ext.grid.Panel',{
    width:1350,
    height:500,
    store : mystore,
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
var myUVgrid_std = Ext.create('Ext.grid.Panel',{
    width:1350,
    height:500,
    store : mystore_std,
    columns: [
        { text: 'SiteName',  dataIndex: 'SiteName' },
        { text: 'SiteEngName', dataIndex: 'SiteEngName', flex: 1 },
        { text: 'County', dataIndex: 'County', flex: 1 },
        { text: 'TownShip', dataIndex: 'TownShip', flex: 1 },
        { text: 'SiteAddress', dataIndex: 'SiteAddress', flex: 1 },
        { text: 'TWD97Lon', dataIndex: 'TWD97Lon', flex: 1 },
        { text: 'TWD97Lat', dataIndex: 'TWD97Lat', flex: 1 },
        { text: 'PublishAgency', dataIndex: 'PublishAgency', flex: 1 },
    ]
});
Ext.define('DemoApp.view.main.Table', {
    extend: 'Ext.TabPanel',
    alias: 'widget.maintable',
    //fullscreen: true,
    tabBarPosition: 'top',
    layout:'column',
    plain: true,
    requires: [
        //'Ext.panel.Panel',        
        'DemoApp.store.UV',
        'Ext.container.Container'    
    ],
    defaults: {
        styleHtmlContent: true
    },
    items: [
        {           
            title: '紫外線即時監測資料',
            xtype: 'container',
            //layout:'column',
            items: [
                {
                    xtype: 'container',
                    layout:'hbox',
                    items :[
                        {
                            text : '重新整理',
                            iconCls  : 'x-fa fa-refresh',
                            xtype : 'button',
                            listeners: {
                                click: {
                                    fn : function(){
                                        mystore.load();
                                    }
                                }
                            }
                        },
                        {
                            text : '詳細資料',
                            xtype : 'button',
                            iconCls  : 'x-fa fa-table',
                            listeners: {
                                click: {
                                    fn : function(){
                                        var row = myUVgrid.getSelectionModel().getSelection();
                                        var myWindow = Ext.create('Ext.window.Window',{
                                            title: '紫外線即時監測資料',
                                            height: 350,
                                            width: 300,
                                            layout: 'fit',
                                            items:[{
                                                bodyPadding: 5,
                                                width: 350,
                                            
                                                // The form will submit an AJAX request to this URL when submitted
                                                // Fields will be arranged vertically, stretched to full width
                                                layout: 'anchor',
                                                
                                                // The fields
                                                defaultType: 'textfield',
                                                items: [{
                                                    fieldLabel: 'County',  
                                                    value: row[0].data.County,
                                                    allowBlank: false
                                                },{
                                                    fieldLabel: 'PublishAgency',
                                                    value: row[0].data.PublishAgency,
                                                    allowBlank: false
                                                },{
                                                    fieldLabel: 'PublishTime',
                                                    value: row[0].data.PublishTime,
                                                    allowBlank: false
                                                },{
                                                    fieldLabel: 'SiteName',
                                                    value: row[0].data.SiteName,
                                                    allowBlank: false
                                                },{
                                                    fieldLabel: 'UVI',
                                                    value: row[0].data.UVI,
                                                    allowBlank: false
                                                },{
                                                    fieldLabel: 'WGS84Lat',
                                                    value: row[0].data.WGS84Lat,
                                                    allowBlank: false
                                                },{
                                                    fieldLabel: 'WGS84Lon',
                                                    value: row[0].data.WGS84Lon,
                                                    allowBlank: false
                                                }],                                               
                                            }]
                                        }).show();
                                    }
                                }
                            }
                        }
                    ]

                },
                {
                    xtype : myUVgrid
                }
            ]
        },
        {
            title: '紫外線測站基本資料',
            xtype: 'container',
            items: [{
                xtype: 'container',
                layout:'hbox',
                items :[
                    {
                        text : '重新整理',
                        iconCls  : 'x-fa fa-refresh',
                        xtype : 'button',
                        listeners: {
                            click: {
                                fn : function(){
                                    mystore_std.load();
                                }
                            }
                        }
                    },
                    {
                        text : '詳細資料',
                        xtype : 'button',
                        iconCls  : 'x-fa fa-table',
                        listeners: {
                            click: {
                                fn : function(){
                                    var row = myUVgrid_std.getSelectionModel().getSelection();
                                    var myWindow = Ext.create('Ext.window.Window',{
                                        title: '紫外線測站基本資料',
                                        height: 400,
                                        width: 300,
                                        layout: 'fit',
                                        items:[{
                                            bodyPadding: 5,
                                            width: 350,
                                        
                                            // The form will submit an AJAX request to this URL when submitted
                                            // Fields will be arranged vertically, stretched to full width
                                            layout: 'anchor',
                                            
                                            // The fields
                                            defaultType: 'textfield',
                                            items: [{
                                                fieldLabel: 'SiteName',  
                                                value: row[0].data.SiteName,
                                                allowBlank: false
                                            },{
                                                fieldLabel: 'SiteEngName',
                                                value: row[0].data.SiteEngName,
                                                allowBlank: false
                                            },{
                                                fieldLabel: 'County',
                                                value: row[0].data.County,
                                                allowBlank: false
                                            },{
                                                fieldLabel: 'TownShip',
                                                value: row[0].data.TownShip,
                                                allowBlank: false
                                            },{
                                                fieldLabel: 'SiteAddress',
                                                value: row[0].data.SiteAddress,
                                                allowBlank: false
                                            },{
                                                fieldLabel: 'TWD97Lon',
                                                value: row[0].data.TWD97Lon,
                                                allowBlank: false
                                            },{
                                                fieldLabel: 'TWD97Lat',
                                                value: row[0].data.TWD97Lat,
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: 'PublishAgency',
                                                value: row[0].data.PublishAgency,
                                                allowBlank: false
                                            }],                                               
                                        }]
                                    }).show();
                                }
                            }
                        }
                    }
                ]

            },
            {
                xtype : myUVgrid_std
            }

            ]
        },
    ],
});

