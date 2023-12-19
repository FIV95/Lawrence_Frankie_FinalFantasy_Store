const Armor = require('./armor.model');
const Discount = require('./discount.model');
const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

class ArmorDiscount extends Model {}

ArmorDiscount.init({
    armor_id: {
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
    modelName: 'ArmorDiscount',
    tableName: 'armor_discounts',
    timestamps: false
});

ArmorDiscount.belongsTo(Armor, {foreignKey: 'armor_id'});
ArmorDiscount.belongsTo(Discount, {foreignKey: 'discount_id'});

module.exports = ArmorDiscount;
