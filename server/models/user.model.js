const ShoppingSession = require('./shopping_session.model.js');
const Address = require('./address.model.js');
const order_details = require('./order_detail.model.js');

const { Model, DataTypes } = require('sequelize');
const OrderDetail = require('./order_detail.model.js');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
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
    role: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: 'user'
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});


User.hasMany(Address, {foreignKey: 'user_id'});
User.hasMany(OrderDetail, {foreignKey: 'user_id'});

User.hasOne(ShoppingSession, {foreignKey: 'user_id'});

Address.belongsTo(User, {foreignKey: 'user_id'});

ShoppingSession.belongsTo(User, {foreignKey: 'user_id'});

OrderDetail.belongsTo(User, {foreignKey: 'user_id'});

module.exports = User;
