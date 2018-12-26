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

Ext.define('DemoApp.store.UV_std', {
    extend: 'Ext.data.Store',

    alias: 'store.UV_std',

    model: 'DemoApp.model.UV_std',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://opendata.epa.gov.tw/api/v1/UVSite?%24skip=0&%24top=1000&%24format=json',
        withCredentials : true,
        useDefaultXhrHeader : false,
        disableCaching : true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});