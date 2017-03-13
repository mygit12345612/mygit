Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    data: [
        {name: 'Ed2',    email: 'ed@sencha.com'},
        {name: 'Tommy2', email: 'tommy@sencha.com'}
    ]
    //简单的指定了本地数据
});