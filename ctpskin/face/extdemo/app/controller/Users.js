Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users'
    ],
    models: ['User'],
    views: [
        'user.List',
        'user.Edit'
    ],

    init: function() {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            }
        });
    },

    editUser: function(grid, record) {
    var view = Ext.widget('useredit');//找到window

    view.down('form').loadRecord(record); //window下的 form，回填数据。
}
});