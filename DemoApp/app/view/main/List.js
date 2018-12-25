/**
 * This view is an example list of people.
 */
Ext.define('DemoApp.view.main.List', {
    extend: 'Ext.tree.Panel',
    xtype: 'mainlist',
    title: '功能表',
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
