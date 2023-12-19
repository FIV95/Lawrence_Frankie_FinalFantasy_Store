const Weapon = require('./weapon.model');
const Armor = require('./armor.model');
const Item = require('./item.model');
const ShoppingSession = require('./shopping_session.model');

const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class CartItem extends Model {}

CartItem.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    session_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    armor_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weapon_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
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
    }
}, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'cart_items',
    timestamps: false
});

CartItem.belongsTo(ShoppingSession, {foreignKey: 'session_id'});
CartItem.belongsTo(Armor, {foreignKey: 'armor_id'});
CartItem.belongsTo(Weapon, {foreignKey: 'weapon_id'});
CartItem.belongsTo(Item, {foreignKey: 'item_id'});

ShoppingSession.hasMany(CartItem, {foreignKey: 'session_id'});

Armor.hasMany(CartItem, {foreignKey: 'armor_id'});
Weapon.hasMany(CartItem, {foreignKey: 'weapon_id'});
Item.hasMany(CartItem, {foreignKey: 'item_id'});

module.exports = CartItem;
