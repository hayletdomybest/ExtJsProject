/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'loginApp.Application',

    name: 'loginApp',

    requires: [
        // This will automatically load all classes in the loginApp namespace
        // so that application classes do not need to require each other.
        'loginApp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'loginApp.view.login.Login'
});
