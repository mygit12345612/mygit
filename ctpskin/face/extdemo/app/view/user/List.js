Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',//别名，在其他地方引用可以直接用userlist

    title: 'All Users',

    // we no longer define the Users store in the `initComponent` method
    store: 'Users',

    initComponent: function() {
       this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];//用来grid显示的列，会将store中name相同的数据显示

        this.callParent(arguments);
    }
});