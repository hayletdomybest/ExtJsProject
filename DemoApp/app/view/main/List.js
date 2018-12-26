/**
 * This view is an example list of people.
 */
Ext.define('DemoApp.view.main.List', {
    extend: 'Ext.tree.Panel',
    xtype: 'mainlist',
    title: '功能表',
    requires: [
        'Ext.window.Window',    
        'DemoApp.store.UV',
        'Ext.container.Container'    
    ],
    listeners: {
        itemclick: function(s,r) {
            switch(r.data.text)
            {
                case '台灣天氣資料':
                    //Windows1.show();
                break;
                case '關於':
                    alert('B');
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
