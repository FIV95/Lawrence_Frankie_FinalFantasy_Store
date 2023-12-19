const User = require('./user.model');
const Payment = require('./payment.model');


const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class OrderDetail extends Model {}

OrderDetail.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    payment_id: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    modelName: 'OrderDetail',
    tableName: 'order_details',
    timestamps: false
});

OrderDetail.belongsTo(User, {foreignKey: 'user_id'});
OrderDetail.belongsTo(Payment, {foreignKey: 'payment_id'});

module.exports = OrderDetail;
