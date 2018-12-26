Ext.define('DemoApp.view.main.Tree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.maintree',
    title: '功能表',
    
    requires: [
        //'Ext.panel.Panel',        
        'Ext.window.Window',
        'Ext.container.Container'    
    ],
    listeners: {
        itemclick: function(s,r) {
            var MyWindow = {};
            var msg1 = "紫外線即時監測資料<br>http://opendata.epa.gov.tw/ws/Data/UV/?$orderby=PublishAgency&$skip=0&$top=1000&format=json<br><br>紫外線測站基本資料<br>https://opendata.epa.gov.tw/api/v1/UVSite?%24skip=0&%24top=1000&%24format=json";
            var msg2 = "你可以使用以下的資源去完成項目<br>Font Awesome CSS CDN<br>https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css<br>ExtJS JS CDN<br>https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js<br>請努力盡量完成 謝謝";
            switch(r.data.text)
            {
                case '台灣天氣資料':
                MyWindow = GetMyWindows(msg1);
                MyWindow.show();
                break;
                case '關於':
                MyWindow = GetMyWindows(msg2);
                MyWindow.show();
                break;
            }
                
        }
    },
    root: {
        text: '所有功能',
        children: [{
            text: '台灣天氣資料',
            leaf: true
        },{
            text: '關於',
            leaf: true
        }]
    }
});

function GetMyWindows(msg)
{
    var o = Ext.create('Ext.window.Window',{
        title :'請使用以下地址取得API資料',
        width : 650,
        height : 250,
        layout : 'fit',
        items:[{
                xtype : 'panel',
                layout: 'border',
                items : [{
                    xtype : 'panel',
                    region : 'center',
                    html : msg,
                },{
                    xtype : 'container',
                    region : 'south',
                    layout : 'center',
                    items : [{
                        xtype : 'button',
                        text : '確定',
                        listeners : {
                            click : {
                                fn : function(){
                                    //alert('hell');
                                    o.close();
                                }
                            }
                        }
                    }]
                    
                }]                       
            },                    
        ]   
    });
    return o;
}