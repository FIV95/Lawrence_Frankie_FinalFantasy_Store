const OrderDetail = require('./order_detail.model');
const Weapon = require('./weapon.model');
const Armor = require('./armor.model');
const Item = require('./item.model');

const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class OrderedProduct extends Model {}

OrderedProduct.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate : DataTypes.NOW
    },
    weapon_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    armor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'OrderedProduct',
    tableName: 'ordered_products',
    timestamps: false
});

OrderedProduct.belongsTo(OrderDetail, {foreignKey: 'order_id'});
OrderedProduct.belongsTo(Weapon, {foreignKey: 'weapon_id'});
OrderedProduct.belongsTo(Armor, {foreignKey: 'armor_id'});
OrderedProduct.belongsTo(Item, {foreignKey: 'item_id'});

module.exports = OrderedProduct;
