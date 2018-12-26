Ext.define('DemoApp.model.UV', {
    extend: 'DemoApp.model.Base',

    fields: [
        'County', 'PublishAgency', 'PublishTime' ,'SiteName','UVI','WGS84Lat','WGS84Lon'
    ],
});
Ext.define('DemoApp.model.UV_std', {
    extend: 'DemoApp.model.Base',

    fields: [
        'SiteName', 'SiteEngName', 'County' ,'TownShip','SiteAddress','TWD97Lon','TWD97Lat', 'PublishAgency'
    ],
});