Ext.define('DemoApp.store.UV', {
    extend: 'Ext.data.Store',

    alias: 'store.UV',

    model: 'DemoApp.model.UV',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://opendata.epa.gov.tw/ws/Data/UV/?$orderby=PublishAgency&amp;$skip=0&amp;$top=1000&format=json',
        withCredentials : true,
        useDefaultXhrHeader : false,
        disableCaching : true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});