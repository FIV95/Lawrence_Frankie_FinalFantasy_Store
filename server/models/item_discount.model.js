const Item = require('./item.model');
const Discount = require('./discount.model');

const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class ItemDiscount extends Model {}

ItemDiscount.init({
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    discount_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'ItemDiscount',
    tableName: 'item_discounts',
    timestamps: false
});

module.exports = ItemDiscount;

ItemDiscount.belongsTo(Item, {foreignKey: 'item_id'});
ItemDiscount.belongsTo(Discount, {foreignKey: 'discount_id'});
